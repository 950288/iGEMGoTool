package utils

var DefaultConfig = `{
	// Directory containing the page to be modified (e.g. "D:\\github\\web\\src\\pages")
	"scanDirectory": "..\\",

	// Directory to store the edited page (e.g. "D:\\github\\web\\src\\WikiData")
	"storeDirectory": ".\\WikiData",

	//Port to be used (e.g. "8080" or "auto")
	"port": "auto",

	//the tag to be scan and incert content (e.g. "WikiBreeze"),
	//which be automatically converted to <!-- WikiBreeze {{name}} start-->
	"incertTag":"WikiBreeze",

	//file type to be scan (e.g. [".html",....])
	"fileType":[".html",".vue"]
}`