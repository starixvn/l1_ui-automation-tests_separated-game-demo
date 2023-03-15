import { SmokeBases } from "sc-automation-core";
import { HappyFishLocators } from "./locators/happy-fish-locators.ts";
import { HappyFishConfigs } from "./happy-fish-configs.ts";

class HappyFishSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions.IBaseOptions = {
            placeBetChoices: [HappyFishConfigs.choices[0]],
            gameConfiguration: HappyFishConfigs,
            locators: HappyFishLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: "smoke",
        };

        super(smokeOptions);
    }
}

new HappyFishSmokeSpec().start();
