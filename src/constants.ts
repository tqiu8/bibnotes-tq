import { MyPluginSettings } from "./types";

export const templatePlain = "# {{title}}\n" +
	"\n" +
	"## Metadata\n" +
	"- **CiteKey**: {{citekey}}\n " +
	"- **Type**: {{itemType}}\n " +
	"- **Title**: {{title}}, \n " +
	"- **Author**: {{author}};  \n" +
	"- **Editor**: {{editor}};  \n" +
	"- **Translator**: {{translator}}\n" +
	"- **Publisher**: {{publisher}},\n" +
	"- **Location**: {{place}},\n" +
	"- **Series**: {{series}}\n" +
	"- **Series Number**: {{seriesNumber}}\n" +
	"- **Journal**: {{publicationTitle}}, \n" +
	"- **Volume**: {{volume}},\n" +
	"- **Issue**: {{issue}}\n" +
	"- **Pages**: {{pages}}\n" +
	"- **Year**: {{year}} \n" +
	"- **DOI**: {{DOI}}\n" +
	"- **ISSN**: {{ISSN}}\n" +
	"- **ISBN**: {{ISBN}}\n" +
	"\n" +
	"## Abstract\n" +
	"{{abstractNote}}" +
	"\n" +
	"## Files and Links\n" +
	"- **Url**: {{url}}\n" +
	"- **Uri**: {{uri}}\n" +
	"- **Eprint**: {{eprint}}\n" +
	"- **File**: {{file}}\n" +
	"- **Local Library**: [Zotero]({{localLibraryLink}})\n" +
	"\n" +
	"## Tags and Collections\n" +
	"- **Keywords**: {{keywordsAll}}\n" +
	"- **Collections**: {{collectionsParent}}\n" +
	"\n" +
	"\n" +
	"----" +
	"\n" +
	"\n" +
	"## Comments\n" +
	"{{UserNotes}}\n" +
	"\n" +
	"\n" +
	"----" +
	"\n" +
	"\n" +
	"## Extracted Annotations\n" +
	"{{PDFNotes}}"

export const templateAdmonition = "# {{title}}\n" +
	"\n" +
	"``` ad-info\n" +
	"title: Metadata\n" +
	"- **CiteKey**: {{citekey}}\n" +
	"- **Type**: {{itemType}}\n" +
	"- **Author**: {{author}}\n" +
	"- **Editor**: {{editor}}\n" +
	"- **Translator**: {{translator}}\n" +
	"- **Publisher**: {{publisher}}\n" +
	"- **Location**: {{place}}\n" +
	"- **Series**: {{series}}\n" +
	"- **Series Number**: {{seriesNumber}}\n" +
	"- **Journal**: {{publicationTitle}}\n" +
	"- **Volume**: {{volume}}\n" +
	"- **Issue**: {{issue}}\n" +
	"- **Pages**: {{pages}}\n" +
	"- **Year**: {{year}} \n" +
	"- **DOI**: {{DOI}}\n" +
	"- **ISSN**: {{ISSN}}\n" +
	"- **ISBN**: {{ISBN}}\n" +
	"```\n" +
	"```ad-quote\n" +
	"title: Abstract\n" +
	"{{abstractNote}}\n" +
	"```\n" +
	"```ad-abstract\n" +
	"title: Files and Links\n" +
	"- **Url**: {{url}}\n" +
	"- **Uri**: {{uri}}\n" +
	"- **Eprint**: {{eprint}}\n" +
	"- **File**: {{file}}\n" +
	"- **Local Library**: [Zotero]({{localLibraryLink}})\n" +
	"```\n" +
	"```ad-note\n" +
	"title: Tags and Collections\n" +
	"- **Keywords**: {{keywordsAll}}\n" +
	"- **Collections**: {{collectionsParent}}\n" +
	"```\n" +
	"\n" +
	"----" +
	"\n" +
	"\n" +
	"## Comments\n" +
	"{{UserNotes}}\n" +
	"\n" +
	"\n" +
	"----" +
	"\n" +
	"\n" +
	"## Extracted Annotations\n" +
	"{{PDFNotes}}"


export const DEFAULT_SETTINGS: MyPluginSettings = {
	bibPath: "",
	templateContent: templatePlain,
	templatePath: "",
	templateType: "Admonition",
	lastUpdateDate: new Date('1995-12-17T03:24:00'),
	updateLibrary: "Only update existing notes",
	exportPath: "",
	exportTitle: "{{citeKey}}",
	missingfield: "Leave placeholder",
	saveManualEdits: "Save Entire Note",
	saveManualEditsStart: "",
	saveManualEditsEnd: "",
	imagesImport: true,
	imagesCopy: false,
	imagesPath: "",
	imagesCommentPosition: "Above the image",
	keyMergeAbove: "+",
	keyCommentPrepend: "%",
	commentPrependDefault: false,
	// commentPrependDivider: ": ",
	// commentAppendDivider: "-> ",
	TagBeginningConfig: "Tag: ",
	TagEndConfig: "",
	TagDividerConfig: "; ",
	keyH1: "#",
	keyH2: "##",
	keyH3: "###",
	keyH4: "####",
	keyH5: "#####",
	keyH6: "######",
	keyKeyword: "=",
	keyTask: "todo",
	keyLookup: "lookup",
	isHighlightItalic: true,
	isHighlightBold: false,
	isHighlightHighlighted: false,
	isHighlightColoured: false,
	isHighlightBullet: true,
	isHighlightBlockquote: false,
	isHighlightQuote: true,
	highlightCustomTextBefore: "",
	highlightCustomTextAfter: "",
	isCommentItalic: false,
	isCommentBold: true,
	isCommentHighlighted: false,
	isCommentColoured: false,
	isCommentBullet: false,
	isCommentBlockquote: true,
	isCommentQuote: false,
	commentCustomTextBefore: "",
	commentCustomTextAfter: "",
	isTagItalic: false,
	isTagBold: false,
	isTagHighlighted: false,
	isTagColoured: false,
	isTagBullet: false,
	isTagBlockquote: false,
	isTagQuote: false,
	isTagHash: true,
	tagCustomTextBefore: "#",
	tagCustomTextAfter: "",
	tagCustomTextBeforeFirst: "",
	tagCustomTextAfterLast: "",
	isDoubleSpaced: true,
	highlightExportTemplate: "{{highlight}} {{comment}} {{tag}}",
	colourYellowText: "{{highlight}}",
	colourPurpleText: "{{highlight}}",
	colourRedText: "{{highlight}}",
	colourGreenText: "{{highlight}}",
	colourBlueText: "{{highlight}}",
	colourBlackText: "{{highlight}}",
	colourWhiteText: "{{highlight}}",
	colourGrayText: "{{highlight}}",
	colourOrangeText: "{{highlight}}",
	colourCyanText: "{{highlight}}",
	colourMagentaText: "{{highlight}}",
	colourCustomHexValue: "#999999",
	colourCustomHexText: "{{highlight}}",
	multipleFieldsDivider: ";",
	nameFormat: "{{lastName}}, {{firstName}}",
	highlightCitationsFormat: "Author, year, page number",
	highlightCitationsLink: true,
	debugMode: false,
	zoteroStoragePathManual: "",
	missingfieldreplacement: "NA",

};

export enum HeaderLevels {
	"typeH1" = 1,
	"typeH2" = 2,
	"typeH3" = 3,
	"typeH4" = 4,
	"typeH5" = 5,
	"typeH6" = 6,
}

export const TEMPLATE_REG = /\{\{[^}]+\}\}/g;
export const TEMPLATE_BRACKET_REG = /\[\[\{\{[^}]+\}\}\]\]/g;