import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";
import { ui } from "../api/ui/UI"

var id = "while (sky == liver);";
var name = "Grass Clicker";
var description = "An implementation of... what? everything you buy will only works while offline";
var authors = "Throngjwk";
var version = 1;

var currency;

var init = () => {
    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "You Played!", "I THINK", () => true);

    var popup = ui.createPopup({
        title: "My Popup",
        content: ui.createStackLayout({
            children: [
                ui.createImage({source: ImageSource.ACCELERATE}),
                ui.createButton({text: "Click Me!", onClicked: () => currency.value += BigNumber.ONE}),
                ui.createLabel({text: "Hello i sorry 😯"}),
                ui.createButton({text: "Save", onClicked: () => num_save += 1}),
                ui.createButton({text: "Close", onClicked: () => popup.hide()})
            ]
        })
    });
    
    popup.show();
}

init();