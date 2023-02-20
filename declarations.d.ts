import 'webextension-polyfill';

/* eslint-disable @typescript-eslint/no-unused-vars */

declare module 'webextension-polyfill' {
    namespace Storage {
        interface Static {
            session: StorageArea;
        }
    }
    namespace Manifest {
        interface WebExtensionManifestWebAccessibleResourcesC2ItemType {
            use_dynamic_url?: boolean;
        }

        interface WebExtensionManifest {
            optional_host_permissions?: MatchPattern[];
            browser_url_overrides?: WebExtensionManifestChromeUrlOverridesType;
        }
    }
}
