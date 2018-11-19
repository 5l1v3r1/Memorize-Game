var memorize = (function (memorize) {

    memorize.logic = (function (logic) {

        // --------------------------------------------------------------------------------
        // Private properties
        // --------------------------------------------------------------------------------
        var index = -1;

        // --------------------------------------------------------------------------------
        // DOM objects
        // --------------------------------------------------------------------------------

        // Options

        var $inputGroupSelectBit = $('#inputGroupSelectBit');
        var $SignedUnsignedSwitch = $('#switch-SignedUnsigned');
        var $ACButton = $('#ACButton');
        var $inputGroupSelectSystem = $('#inputGroupSelectSystem');
        
        // Input Group - Operand 1

        var $operand1Decimal = $('#operand1Decimal');
        var $operand1DecimalPlus = $('#operand1DecimalPlus');
        var $operand1DecimalMinus = $('#operand1DecimalMinus');

        var $operand1System = $('#operand1System');

        // --------------------------------------------------------------------------------
        // Private functions
        // --------------------------------------------------------------------------------
        function Init() {

        }

        Init();

        return logic;

    }(memorize.logic || {}));

    return memorize;

}(memorize || {}));