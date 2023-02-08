/* eslint-disable @typescript-eslint/no-unused-vars */
import * as browser from 'webextension-polyfill';

declare module 'webextension-polyfill' {
    interface Browser {
        system: any;
    }
    
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
        }
    }
}
