/* Devanagari - INSCRIPT Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdindev.html
 */
jQuery.keyboard.layouts["ms-Devanagari - INSCRIPT"] = {
	name: "ms-Devanagari - INSCRIPT",
	lang: ["hi", "ne", "mr", "kok", "bodo", "mai"],
	"normal": [
		"\u094a 1 2 3 4 5 6 7 8 9 0 - \u0943 {bksp}",
		"{tab} \u094c \u0948 \u093e \u0940 \u0942 \u092c \u0939 \u0917 \u0926 \u091c \u0921 \u093c \u0949",
		"\u094b \u0947 \u094d \u093f \u0941 \u092a \u0930 \u0915 \u0924 \u091a \u091f {enter}",
		"{shift} \u0949 \u0946 \u0902 \u092e \u0928 \u0935 \u0932 \u0938 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift: [
		"\u0912 \u090d \u0945 \u094d\u0930 \u0930\u094d \u091c\u094d\u091e \u0924\u094d\u0930 \u0915\u094d\u0937 \u0936\u094d\u0930 ( ) \u0903 \u090b {bksp}",
		"{tab} \u0914 \u0910 \u0906 \u0908 \u090a \u092d \u0919 \u0918 \u0927 \u091d \u0922 \u091e \u0911",
		"\u0913 \u090f \u0905 \u0907 \u0909 \u092b \u0931 \u0916 \u0925 \u091b \u0920 {enter}",
		"{shift} \u0911 \u090e \u0901 \u0923 \u0929 \u0934 \u0933 \u0936 \u0937 \u0964 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt: [
		"{empty} \u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0966 {empty} \u0944 {bksp}",
		"{tab} {empty} {empty} {empty} \u0963 {empty} {empty} {empty} \u095a {empty} \u095b \u095c {empty} {empty}",
		"{empty} {empty} {empty} \u0962 {empty} {empty} {empty} \u0958 {empty} \u0952 {empty} {enter}",
		"{shift} {empty} \u0953 {empty} \u0954 {empty} {empty} {empty} {empty} \u0970 \u0965 {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift": [
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0960 {bksp}",
		"{tab} {empty} {empty} {empty} \u0961 {empty} {empty} {empty} {empty} {empty} {empty} \u095d {empty} {empty}",
		"{empty} {empty} {empty} \u090c {empty} \u095e {empty} \u0959 {empty} {empty} \u0951 {enter}",
		"{shift} {empty} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} {empty} \u093d {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// hi = ISO 639-1 code for Hindi
// ***********************
jQuery.keyboard.language.hi = {
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};
