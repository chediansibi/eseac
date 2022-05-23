Configuration Translation Access

INTRODUCTION
------------

The Configuration Translation Access module provides a permission that allows 
users (usually site builders) to edit translations of configration *that they 
already have edit access to*.

Drupal Core provides the Config Translation module which can be used to 
translate - you guessed it - configuration. For example the page slogan, the 
content type names, field labels etc. To do so, a user needs the "Translate 
configuration" permission to "Translate any configuration including those 
shipped with modules and themes."

This is awesome, until you have configuration that you *don't* want your users 
to be allowed to translate. Since this is a all-or-nothing type of permission, 
you're on your own to create custom access code, grant global translation 
permissions, or deny all translation. This module provides the additional 
"Translate editable configuration" permission, which allows the user to edit 
translations of any configuration they can already edit, including those 
provided by core, contrib or custom modules.

**Need an example?**

Mary, the junior site builder, creates a new content type "Project". Since the 
Drupal site is multilingual, she needs to translate the bundle name and its 
fields. However, she doesn't have access to "Translate configuration". 
With this module, she will be able to do so!

John, the client, has been provided a custom module where he can configure some 
links to reach localized support. They've recently added a new language, for 
which he needs to add an email address. Since he has access to that module's 
configuration, he can add this translation on his own, without relying on your 
developers or support.

 * For a full description of the module, visit the project page:
   https://www.drupal.org/project/config_translation_access

 * To submit bug reports and feature suggestions, or track changes:
   https://www.drupal.org/project/issues/config_translation_access


REQUIREMENTS
------------

This module requires no modules outside of Drupal core.

INSTALLATION
------------

 * Install as you would normally install a contributed Drupal module. Visit
   https://www.drupal.org/node/1897420 for further information.

CONFIGURATION
-------------
 
 * Configure the user permissions in Administration » People » Permissions:

   - Translate editable configuration (Config Translation Access module)

     Users with this permission will be able to add and edit translation for 
     configuration to which they have edit permissions.
     You enable this module's functionality by granting this permission. 


   - Translate configuration (Config Translation module)

     Users with this permission (provided by Core's Configuration Translation 
     module) are able to add and edit any configuration translation, including,
     but not limited to, site label/slogan, views and content types. Even if 
     they are not permitted to edit the original configuration. 
     You may wish to remove this wildcard permission from user roles with 
     reduced privileges.
