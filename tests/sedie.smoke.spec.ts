import { SmokeBases } from "sc-automation-core";

import { SedieLocators } from "./locators/sedie-locators.ts";
import { SedieConfigs } from "./sedie-configs.ts";

class SedieSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions.IBaseOptions = {
            gameConfiguration: SedieConfigs,
            locators: SedieLocators,
            waitBetTimeout: 8000,
            placeBetChoices: [SedieConfigs.choices[0]],
            snapshotFolderPath: "smoke",
        };

        super(smokeOptions);
    }
}

new SedieSmokeSpec().start();
