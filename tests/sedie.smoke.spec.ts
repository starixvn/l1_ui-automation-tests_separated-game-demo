import { SedieLocators } from "./locators/sedie-locators";
import { SedieConfigs } from "./sedie-configs";
import { TableGameBase, IBaseOptions } from "sc-automation-core/src/smoke-bases";

class SedieSmokeSpec extends TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: IBaseOptions = {
            gameConfiguration: SedieConfigs,
            locators: SedieLocators,
            waitBetTimeout: 8000,
            placeBetChoices: [SedieConfigs.choices[0]],
            snapshotFolderPath: __filename,
        };

        super(smokeOptions);
    }
}

new SedieSmokeSpec().start();
