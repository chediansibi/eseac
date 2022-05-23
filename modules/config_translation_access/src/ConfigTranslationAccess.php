<?php

namespace Drupal\config_translation_access;

use Drupal\config_translation\Access\ConfigTranslationOverviewAccess as ConfigTranslationAccessBase;
use Drupal\config_translation\ConfigMapperManagerInterface;
use Drupal\Core\Access\AccessManagerInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Routing\Access\AccessInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Checks access for displaying the translation add, edit, and delete forms.
 */
class ConfigTranslationAccess extends ConfigTranslationAccessBase {

  /**
   * The form/overview config translation access check service.
   *
   * @var \Drupal\Core\Routing\Access\AccessInterface
   */
  protected $innerService;

  /**
   * The access manager.
   *
   * @var \Drupal\Core\Access\AccessManagerInterface
   */
  protected $accessManager;

  /**
   * Constructs a ConfigTranslationOverviewAccess object.
   *
   * @param \Drupal\Core\Routing\Access\AccessInterface $inner_service
   *   The original access handler.
   * @param \Drupal\Core\Access\AccessManagerInterface $access_manager
   *   The acces manager service.
   * @param \Drupal\config_translation\ConfigMapperManagerInterface $config_mapper_manager
   *   The mapper plugin discovery service.
   * @param \Drupal\Core\Language\LanguageManagerInterface $language_manager
   *   The language manager service.
   */
  public function __construct(AccessInterface $inner_service, AccessManagerInterface $access_manager, ConfigMapperManagerInterface $config_mapper_manager, LanguageManagerInterface $language_manager) {
    parent::__construct($config_mapper_manager, $language_manager);
    $this->innerService = $inner_service;
    $this->accessManager = $access_manager;
  }

  /**
   * Grants access to the requested route based on module permission.
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The route_match to check against.
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The account to check access for.
   * @param string $langcode
   *   The language code of the target language.
   *
   * @return \Drupal\Core\Access\AccessResultInterface
   *   The access result.
   */
  public function access(RouteMatchInterface $route_match, AccountInterface $account, $langcode = NULL) {
    $access_result = $this->innerService->access($route_match, $account, $langcode);
    if (!$access_result->isNeutral()) {
      // Result is already allowed or forbidden, don't interfere.
      return $access_result;
    }

    $access_result->cachePerPermissions();
    if ($account->hasPermission('translate editable configuration')) {
      $mapper = $this->getMapperFromRouteMatch($route_match);
      $edit_access = $this->accessManager->checkNamedRoute($mapper->getBaseRouteName(), $mapper->getBaseRouteParameters(), $account);
      $access_result = $access_result->orIf(AccessResult::allowedIf($edit_access));
    }
    return $access_result;
  }

}
