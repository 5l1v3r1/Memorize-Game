var memorize = (function (memorize) {

    memorize.logic = (function (logic) {

        // --------------------------------------------------------------------------------
        // Private properties
        // --------------------------------------------------------------------------------
        var index = -1;

        var gameDifficulty  = {
            Easy: 1,
            Medium: 2,
            Hard: 3,
		};

        // --------------------------------------------------------------------------------
        // DOM objects
        // --------------------------------------------------------------------------------

        // Options

        var $inputGroupSelectBit = $('#inputGroupSelectBit');
        var $ACButton = $('#ACButton');
        
        // Input Group - Operand 1

        var $operand1Decimal = $('#operand1Decimal');

        // --------------------------------------------------------------------------------
        // Private functions
        // --------------------------------------------------------------------------------
        function Init() {

        }

        Init();

        // GUI Logic

        function startGame() {

        }

        function openMainMenu() {

        }

        function openOptionMenu() {

        }

        function close() {

        }

        return logic;

    }(memorize.logic || {}));

    return memorize;

}(memorize || {}));