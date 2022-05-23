<?php

namespace Drupal\Tests\config_translation_access\Functional;

use Drupal\language\Entity\ConfigurableLanguage;
use Drupal\Tests\BrowserTestBase;

/**
 * Tests for the Configuration Translation Access module.
 *
 * @group config_translation_access
 */
class ConfigTranslationAccessTests extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * Modules to install.
   *
   * @var array
   */
  protected static $modules = [
    'language',
    'locale',
    'config',
    'config_translation',
    'config_translation_access',
  ];

  /**
   * A Drupal site user.
   *
   * @var \Drupal\user\Entity\User
   */
  private $user;

  /**
   * Perform initial setup tasks that run before every test method.
   */
  public function setUp(): void {
    parent::setUp();

    $this->user = $this->drupalCreateUser();

    ConfigurableLanguage::createFromLangcode('de')->save();
  }

  /**
   * Verify permission interaction.
   */
  public function testPermissions() {
    $this->drupalLogin($this->user);

    // Any configuration with associated permissions + translatables will do.
    $base_path = 'admin/config/system/site-information';

    $role_permissions = [
      'site_builder' => ['administer site configuration'],
      'config_translator' => ['translate editable configuration'],
      'config_admin' => ['translate configuration'],
    ];
    foreach ($role_permissions as $name => $permissions) {
      $rid = $this->createRole($permissions, $name);
      if (!$rid) {
        return FALSE;
      }
    }

    // Any configuration with associated permissions + translatables will do.
    $this->user->addRole('site_builder');
    $this->user->save();
    $this->drupalGet($base_path);
    $this->assertSession()->statusCodeEquals(200);
    $this->drupalGet($base_path . '/translate');
    $this->assertSession()->statusCodeEquals(403);

    // Ensure Core's "edit any" access remains functional.
    $this->user->addRole('config_admin');
    $this->user->save();
    $this->drupalGet($base_path);
    $this->assertSession()->statusCodeEquals(200);
    $this->drupalGet($base_path . '/translate');
    $this->assertSession()->statusCodeEquals(200);

    $this->user->removeRole('config_admin');
    $this->user->addRole('config_translator');
    $this->user->save();
    $this->drupalGet($base_path);
    $this->assertSession()->statusCodeEquals(200);
    // Test translation overview page access.
    $this->drupalGet($base_path . '/translate');
    $this->assertSession()->statusCodeEquals(200);

    // POST to admin/config/system/site-information/translate/de/add.
    $edit = [];
    $edit['translation[config_names][system.site][name]'] = 'Seitenname';
    // Test trabslation add form access.
    $this->drupalPostForm($base_path . '/translate/de/add', $edit, 'Save translation');
    $this->assertSession()->statusCodeEquals(200);
    // Ensure translation edit form access.
    $this->drupalGet($base_path . '/translate/de/edit');
    $this->assertSession()->statusCodeEquals(200);
  }

}
