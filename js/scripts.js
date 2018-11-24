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
            Very Hard: 4,
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

        function startGame() {

        }

        function openMainMenu() {

        }

        function openOptionMenu() {

        }

        return logic;

    }(memorize.logic || {}));

    return memorize;

}(memorize || {}));