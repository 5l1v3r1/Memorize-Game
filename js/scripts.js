var memorize = (function (memorize) {

	memorize.logic = (function (logic) {

		// --------------------------------------------------------------------------------
		// Private properties
		// --------------------------------------------------------------------------------

		var gameDifficulty  = {
			Easy: 1,
			Medium: 2,
			Hard: 3,
		};

		// --------------------------------------------------------------------------------
		// DOM objects
		// --------------------------------------------------------------------------------

		// Options

		var $ACButton = $('#ACButton');

		// Input Group - Operand 1

		var $operand1Decimal = $('#operand1Decimal');

		// --------------------------------------------------------------------------------
		// Private functions
		// --------------------------------------------------------------------------------
		function Init() {

		}

		Init();

		// GUI Logic - Start

		// Opens the View with the specified class name.
		function openView(viewClass) {
			close();
			$(viewClass).addClass("active");
		}

		function close() {
			$(".mainMenu").removeClass("active");
			$(".optionsMenu").removeClass("active");
			$(".inGame").removeClass("active");
			$(".credits").removeClass("active");
		}

		// Click Event Handlers

		$("#BTNStartGame").click(function() {
			openView(".inGame");
		});

		$("#BTNOptions").click(function() {
			openView(".optionsMenu");
		});

		$("#BTNCredits").click(function() {
			openView(".credits");
		});

		$(".backBTN").click(function() {
			openView(".mainMenu");
		});

		// GUI Logic - End

		return logic;

	}(memorize.logic || {}));

	return memorize;

}(memorize || {}));