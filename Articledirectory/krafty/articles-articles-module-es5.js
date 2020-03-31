(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles-articles-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-detail/article-detail.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-detail/article-detail.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesArticleDetailArticleDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-xs-12\">\n<div [ngStyle]=\"{ 'background-image': 'url(' + article.imagePath + ')','background-repeat': 'no-repeat',\n 'height':'600px', 'background-size': '100% 600px','filter':'blur(2px)'}\"></div>\n<div class=\"banner-text\">\n    <h1>{{article.name}}</h1>\n    <h3>{{article.description}}</h3>\n</div>\n</div>\n<h2>MADE BY <span data-toggle=\"modal\" data-target=\"#myModal\" style=\"text-decoration: underline;cursor: pointer;\">{{article.author}}</span>.CREATED ON {{article.date}}</h2>\n\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 style=\"color: palevioletred;font-weight: bolder;\" class=\"modal-title\">{{article.author}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{article.aboutauthor}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-8\">\n  <h1 style=\"font-family: 'Bowlby One SC';\">Things you'll need</h1>\n  <div style=\"border: 2px solid lightslategrey;\">\n<ol *ngFor=\"let articleElthing of article.things; let i= index\">\n  <li><span style=\"color: brown;font-weight: bold;\">{{i+1}}.</span> {{articleElthing.desc}}</li>\n</ol>\n</div>\n<h2 style=\"font-family: 'Bowlby One SC';\"><i class=\"fas fa-atom\"></i> Tip</h2>\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\"><h3>{{article.tip}}</h3></div>\n</div>\n  <div *ngFor=\"let articleElStep of article.steps; let i= index\">\n    <h1 style=\"font-family: 'Bowlby One SC';\">STEP {{i+1}}</h1>\n    <h3>{{articleElStep.desc}}</h3>\n    <img src=\"{{articleElStep.imagePath}}\" alt=\"step {{i+1}}\">\n  </div>\n</div>\n<div class=\"col-xs-4 sticky\">\n<h2 style=\"font-family: 'Bowlby One SC';\">You may Like</h2>\n<hr style=\"border: 2px solid black;\">\n<ng-container *ngFor=\"let articleEl of articles; let i= index\">\n  <div *ngIf=\"i<5\">\n  <a style=\"cursor: pointer;text-decoration: none;\" (click)=\"onSelection(i)\">\n  <span class=\"sticky-number\" >{{i+1}}.</span>\n  <span class=\"sticky-text\">{{articleEl.name}}</span>\n  </a>\n  <br /><br />\n  </div>\n</ng-container>\n</div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-content/article-content.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-content/article-content.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesArticleListArticleContentArticleContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>DIY & HOW-TO EVERYTHING</h1>\n  </div>\n</div>\n\n<br /><br />\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"container\">\n        <ng-container *ngFor=\"let articleEl of articles; let i= index\">\n            <div *ngIf=\"(selectionCategory=='' && searchedKeyword=='') || \n            onSelectCategory(articleEl.category) || onSearchKeyword(articleEl.name)\"\n             class=\"article\">\n              <a style=\"cursor: pointer;text-decoration: none;\"\n              [routerLink]=\"[i]\">\n                <img src={{articleEl.imagePath}} alt=\"Art-img\" >\n                <h3 style=\"color: black;\">{{articleEl.name}}</h3>\n                <p style=\"color: maroon;\">{{articleEl.description.substring(0, 300)}}...</p>\n                <p style=\"color: black;\">{{articleEl.author}}</p>\n              </a>\n            </div>\n        </ng-container>\n    </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesArticleListArticleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-6\" id=\"heading\" *ngIf=\"featuredArticle\">\n  <section>\n      <h2>{{featuredArticle.name}} <hr>\n      <p style=\"font-family: sans-serif;font-size: small;\">-{{featuredArticle.author}}</p></h2>\n  </section>\n</div>\n<div class=\"col-lg-6\" *ngIf=\"featuredArticle\">\n <a style=\"cursor: pointer;\" [routerLink]=\"[featuredArticleid]\"> <img \n  src=\"{{featuredArticle.imagePath}}\"\n  class=\"responsive\">\n</a>\n</div>\n\n<div class=\"col-xs-12\">\n<router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesArticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-xs-12\">\r\n<br>\r\n    <router-outlet></router-outlet>\r\n<br>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesMyarticlesMyarticleEditMyarticleEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">                        \n          <h1>{{editMode ? 'UPDATE' : 'ADD'}}  POST</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3\">\n            <form [formGroup]=\"articleForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label>Post Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" \n                    placeholder=\"post name\" formControlName=\"name\">\n                    <span *ngIf=\"!articleForm.get('name').valid && articleForm.get('name').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('name').errors['required']\">Post Name field is Required!</span>\n                    </span>\n                </div>                            \n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea rows=\"5\" cols=\"50\" type=\"text\" class=\"form-control\" id=\"description\" \n                    name=\"description\" placeholder=\"description\" formControlName=\"description\"></textarea>\n                    <span *ngIf=\"!articleForm.get('description').valid && articleForm.get('description').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('description').errors['required']\">Description field is Required!</span>\n                    </span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Category</label><br>\n                    <select class=\"mdb-select md-form\" id=\"category\" name=\"category\" formControlName=\"category\">\n                        <option value=\"\" disabled selected>Choose category</option>\n                        <option value=\"food\">FOOD & DRINK</option>\n                        <option value=\"home-decor\">HOME DECOR & REPAIR</option>\n                        <option value=\"crafts\">CRAFTS</option>\n                        <option value=\"fashion\">FASHION & BEAUTY</option>\n                    </select>\n                    <span *ngIf=\"!articleForm.get('category').valid && articleForm.get('category').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('category').errors['required']\">Please select a category!</span>\n                    </span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Image Url</label>\n                    <input type=\"text\" class=\"form-control\" id=\"imagePath\"\n                    name=\"imagePath\" placeholder=\"Image url\" formControlName=\"imagePath\" #imagePath>\n                    <span *ngIf=\"!articleForm.get('imagePath').valid && articleForm.get('imagePath').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('imagePath').errors['required']\">Please provide your image path!</span>\n                    </span>\n                </div>  \n                \n                <div class=\"form-group\">\n                <img [src]=\"imagePath.value\" class=\"img-responsive\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Author Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"author\" [attr.disabled]=\"true\"\n                    name=\"author\" placeholder=\"Author name\" formControlName=\"author\">\n                    \n                </div>\n\n                <div class=\"form-group\">\n                    <label>About Author</label>\n                    <textarea rows=\"5\" cols=\"50\" type=\"text\" class=\"form-control\" id=\"aboutauthor\" \n                    name=\"aboutauthor\" placeholder=\"about author\" formControlName=\"aboutauthor\"></textarea>\n                    <span *ngIf=\"!articleForm.get('aboutauthor').valid && articleForm.get('aboutauthor').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('aboutauthor').errors['required']\">Please provide a brief description about yourself!</span>\n                    </span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Date</label>\n                    <input type=\"text\" class=\"form-control\" id=\"date\" \n                    name=\"date\" placeholder=\"date\" formControlName=\"date\" [attr.disabled]=\"true\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Tip</label>\n                    <textarea rows=\"3\" cols=\"50\" type=\"text\" class=\"form-control\" id=\"tip\" \n                    name=\"tip\" placeholder=\"add a tip\" formControlName=\"tip\"></textarea>\n                    <span *ngIf=\"!articleForm.get('tip').valid && articleForm.get('tip').touched\"class=\"help-block\">\n                        <span *ngIf=\"articleForm.get('tip').errors['required']\">Please provide a piece of advice about your post!</span>\n                    </span>\n                </div>\n\n                <div class=\"form-group\" formArrayName=\"things\">\n                    <label *ngIf=\"getControlsOfThings().length>0\">Things You'll Need</label>\n                    <div class=\"row\"\n                    *ngFor=\"let thingCtrl of getControlsOfThings();let i=index\"\n                    [formGroupName]=\"i\"\n                    style=\"margin-top: 10px;\">\n                        <div class=\"col-xs-10\">\n                            <input type=\"text\" placeholder=\"add Content\" class=\"form-control\" formControlName=\"desc\">\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"onDeleteThing(i)\">\n                                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                        <button type=\"button\" class=\"btn btn-start-order\"\n                        (click)=\"onAddThings()\"\n                        >Add Content</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\" formArrayName=\"steps\">\n                    <label *ngIf=\"getControlsOfSteps().length>0\" style=\"font-size: x-large;\">STEPS TO PERFORM</label>\n                    <div class=\"row\"\n                    *ngFor=\"let stepCtrl of getControlsOfSteps();let i=index\"\n                    [formGroupName]=\"i\"\n                    style=\"margin-top: 10px;\">\n                        <div class=\"col-xs-10\">\n                            <label style=\"font-weight: bold;font-size: x-large;\">STEP {{i+1}}</label>\n                            <textarea rows=\"6\" cols=\"50\" type=\"text\" placeholder=\"add a step\" class=\"form-control\"\n                             formControlName=\"desc\"></textarea>\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"onDeleteStep(i)\">\n                                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                        <div class=\"col-xs-10\">\n                            \n                        <label>Image Url Step {{i+1}}</label>\n                            <input type=\"text\" class=\"form-control\" \n                            placeholder=\"Image url\" formControlName=\"imagePath\" #StepimagePath>\n                        </div>\n                        <div class=\"col-xs-10\">\n                            <img [src]=\"StepimagePath.value\" class=\"img-responsive\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                        <button type=\"button\" class=\"btn btn-start-order\"\n                        (click)=\"onAddSteps()\"\n                        >Add Step</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center\" >\n                    <button type=\"submit\" class=\"btn btn-start-order\"\n                     [disabled]=!articleForm.valid>SAVE</button>\n                    <button type=\"button\" class=\"btn btn-start-order\" (click)=\"onCancel()\">CLEAR</button>\n                </div>\n                \n            </form>\n        </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticles.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticles.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesMyarticlesMyarticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/mycontent/mycontent.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/mycontent/mycontent.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlesMyarticlesMycontentMycontentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>MY ARTICLES</h1>\n    </div>\n</div>\n<br /><br />\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"box\">\n      <a routerLink='new' class=\"bttn\" (click)=\"onAddPost()\">add post</a> \n    </div>\n  </div>\n</div>\n<br /><br />\n<div class=\"row\" style=\"min-height:100vh;\" *ngIf=\"count==0\">\n  <main>\n    <div class=\"square\">\n      <img src=\"assets\\images\\1068428.png\" class=\"mask\"><br>\n   <h2>YOU HAVEN'T ADDED ANYTHING YET</h2><br />\n      <p>Click on the above or below icon to add something to your article list.</p>\n      \n   <div><a routerLink='new' (click)=\"onAddPost()\" class=\"button\">WRITE</a></div>\n    </div>\n    \n    </main>\n</div>\n\n<div class=\"row\">\n  <div style=\"text-align: center;font-family: 'Mogra', cursive;\" class=\"col-xs-12\" *ngIf=\"count>0\">\n    <h1>TO HAVE CONTRIBUTED {{count}} ARTICLES</h1>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"container\">\n        <ng-container *ngFor=\"let articleEl of articles; let i= index\">\n            <div *ngIf=\"onSelectAuthor(articleEl.author)\"\n             class=\"article\">\n              <a style=\"cursor: pointer;text-decoration: none;\"\n              [routerLink]=\"['/articles',i]\">\n                <img src={{articleEl.imagePath}} alt=\"Art-img\" >\n                <h3 style=\"color: black;\">{{articleEl.name}}</h3>\n                <p style=\"color: maroon;\">{{articleEl.description.substring(0, 300)}}...</p>\n                <p style=\"color: black;\">{{articleEl.author}}</p>\n              </a>\n              <div class=\"dropdown\">\n                <button style=\"border-radius: 100px;outline: none;\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"dot\"></span>\n               <span class=\"dot\"></span>\n                <span class=\"dot\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a [routerLink]=\"[i,'edit']\" \n                    style=\"cursor: pointer;font-family: 'Fugaz One';\">EDIT</a></li>\n                  <li><a (click)=\"onDelete(i)\" \n                    style=\"cursor: pointer;font-family: 'Fugaz One';\">DELETE</a></li>\n                </ul>\n              </div>\n            </div>\n        </ng-container>\n    </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/articles/article-detail/article-detail.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/articles/article-detail/article-detail.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesArticleDetailArticleDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');\r\nh1 {\r\n    text-shadow: 0px 0px 6px rgba(255,255,255,0.7);\r\n    font-family: 'Pacifico', cursive;\r\n}\r\nh2,h3{\r\n    font-family: 'Odibee Sans';\r\n}\r\n.modal-content {\r\n    font-family: 'Pacifico', cursive;\r\n    color: black;\r\n    font-weight: bold;\r\n    background: -webkit-gradient(linear, left top, right top, from(#ece9e6), to(#ffffff));\r\n    background: linear-gradient(to right, #ece9e6, #ffffff);\r\n}\r\n.banner-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    text-align: center;\r\n    padding: 20px;\r\n    border-top-left-radius: 70px;\r\n    border-bottom-right-radius: 70px;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    font-weight: bold;\r\n    border: 7px inset rosybrown;    \r\n}\r\n.banner-text h3 {\r\n    padding: 0 8%;\r\n    color: lightsteelblue;\r\n    text-shadow: #474747 3px 5px 2px;\r\n    font-family: 'Odibee Sans';\r\n    font-size: x-large;\r\n}\r\nol {\r\n    list-style-type: none;\r\n    font-weight: bold;\r\n}\r\nli {\r\n    font-size: 2rem;\r\n    margin: 10px;\r\n}\r\ndiv.sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    padding: 50px;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    color: black;\r\n  }\r\n.sticky-number {\r\n    color: black;\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n    font-family: 'Bowlby One SC';\r\n  }\r\n.sticky-text {\r\n      color: indianred;\r\n    text-shadow: 0 0 3px wheat;\r\n      font-weight: bold;\r\n      font-family: 'Fredoka One';\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFDL0UsaUZBQWlGO0FBQ2pGO0lBQ0ksOENBQThDO0lBQzlDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxRkFBdUQ7SUFBdkQsdURBQXVEO0FBQzNEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0FBQ0E7TUFDSSxnQkFBZ0I7SUFDbEIsMEJBQTBCO01BQ3hCLGlCQUFpQjtNQUNqQiwwQkFBMEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlcy9hcnRpY2xlLWRldGFpbC9hcnRpY2xlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GcmVkb2thK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Cb3dsYnkrT25lK1NDJmRpc3BsYXk9c3dhcCcpO1xyXG5oMSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XHJcbn1cclxuaDIsaDN7XHJcbiAgICBmb250LWZhbWlseTogJ09kaWJlZSBTYW5zJztcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWNlOWU2LCAjZmZmZmZmKTtcclxufVxyXG4uYmFubmVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiA3cHggaW5zZXQgcm9zeWJyb3duOyAgICBcclxufVxyXG4uYmFubmVyLXRleHQgaDMge1xyXG4gICAgcGFkZGluZzogMCA4JTtcclxuICAgIGNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcclxuICAgIHRleHQtc2hhZG93OiAjNDc0NzQ3IDNweCA1cHggMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPZGliZWUgU2Fucyc7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbm9sIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuZGl2LnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3RpY2t5LW51bWJlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZSBTQyc7XHJcbiAgfVxyXG4gIC5zdGlja3ktdGV4dCB7XHJcbiAgICAgIGNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCB3aGVhdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/articles/article-detail/article-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/articles/article-detail/article-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ArticleDetailComponent */

  /***/
  function srcAppArticlesArticleDetailArticleDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function () {
      return ArticleDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/articles/article.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ArticleDetailComponent = class ArticleDetailComponent {
      constructor(articleService, route, router) {
        this.articleService = articleService;
        this.route = route;
        this.router = router;
        this.articles = [];
      }

      ngOnInit() {
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.article = this.articleService.getArticle(this.id);
        });
        this.articles = this.articleService.articles;
      }

      onSelection(idx) {
        this.router.navigate(['../', idx], {
          relativeTo: this.route
        });
      }

      ngAfterContentChecked() {
        window.scrollTo(0, 0);
      }

    };

    ArticleDetailComponent.ctorParameters = () => [{
      type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ArticleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-detail/article-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-detail.component.css */
      "./src/app/articles/article-detail/article-detail.component.css")).default]
    })], ArticleDetailComponent);
    /***/
  },

  /***/
  "./src/app/articles/article-list/article-content/article-content.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/articles/article-list/article-content/article-content.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesArticleListArticleContentArticleContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Fugaz+One|Rye&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');\r\nimg{\r\n    border-radius: 50px;\r\n  }\r\nh1 {\r\n      color:#2F4F4F\t\t;\r\n      text-align: center;\r\n      text-decoration: underline;\r\n      -webkit-text-decoration-style: wavy;\r\n              text-decoration-style: wavy;\r\n      -webkit-text-decoration-color: salmon;\r\n              text-decoration-color: salmon;\r\n      font-weight: bold;\r\n      background: -webkit-gradient(linear, left top, right top, from(#833ab4), color-stop(#fd1d1d), to(#fcb045));\r\n      background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);\r\n      -webkit-background-clip: text;\r\n              background-clip: text;\r\n      -webkit-text-fill-color: transparent;\r\n  }\r\ndiv{\r\n    font-family: 'Pacifico', cursive;\r\n  }\r\n.container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      width: auto;\r\n      margin: 0 auto;\r\n      flex-wrap: wrap;\r\n      -webkit-box-align: start;\r\n              align-items: flex-start;\r\n    }\r\n.article {\r\n      background-color: #fff;\r\n      padding: 30px;\r\n      margin: 10px 10px;\r\n      width: 31%;\r\n      color: #666666;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);\r\n    }\r\n.article img {\r\n      max-width: 100%;\r\n      height: auto;\r\n    }\r\n.article h2 {\r\n      color: #444;\r\n      margin-top: 0;\r\n    }\r\n.dot {\r\n      height: 10px;\r\n      width: 10px;\r\n      background-color: #bbb;\r\n      border-radius: 50%;\r\n      display: inline-block;\r\n    }\r\n.box{\r\n      position:absolute;\r\n      top:50%;\r\n      left:50%;\r\n      -webkit-transform : translate(-50% ,-50%);\r\n              transform : translate(-50% ,-50%);\r\n    }\r\n.bttn{\r\n      text-decoration: none;\r\n      text-transform:uppercase;\r\n      position:relative;\r\n      top:0;\r\n      left:0;\r\n      background: -webkit-gradient(linear, left top, right top, from(#feac5e), color-stop(#c779d0), to(#4bc0c8));\r\n      background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);\r\n      font-family: 'Lilita One';\r\n      font-weight: bold;\r\n      color:#000;\r\n      cursor: pointer;\r\n      padding:20px 40px;\r\n      border-radius:100px;\r\n      -webkit-transition: all .5s;\r\n      transition: all .5s;\r\n    }\r\n.bttn:hover{\r\n       box-shadow:0px 10px 10px rgba(0,0,0,0.2);\r\n       -webkit-transform : translateY(-3px);\r\n               transform : translateY(-3px);\r\n    }\r\n    \r\n    \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZS1saXN0L2FydGljbGUtY29udGVudC9hcnRpY2xlLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UsaUZBQWlGO0FBQ2pGLDhFQUE4RTtBQUM1RTtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQixxQ0FBNkI7Y0FBN0IsNkJBQTZCO01BQzdCLGlCQUFpQjtNQUNqQiwwR0FBZ0U7TUFBaEUsZ0VBQWdFO01BQ2hFLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsb0NBQW9DO0VBQ3hDO0FBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFFQztNQUNHLG9CQUFhO01BQWIsYUFBYTtNQUNiLFdBQVc7TUFDWCxjQUFjO01BQ2QsZUFBZTtNQUNmLHdCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7QUFDQTtNQUNFLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLDBDQUEwQztJQUM1QztBQUVBO01BQ0UsZUFBZTtNQUNmLFlBQVk7SUFDZDtBQUVBO01BQ0UsV0FBVztNQUNYLGFBQWE7SUFDZjtBQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtJQUN2QjtBQUVBO01BQ0UsaUJBQWlCO01BQ2pCLE9BQU87TUFDUCxRQUFRO01BQ1IseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztBQUVBO01BQ0UscUJBQXFCO01BQ3JCLHdCQUF3QjtNQUN4QixpQkFBaUI7TUFDakIsS0FBSztNQUNMLE1BQU07TUFDTiwwR0FBZ0U7TUFBaEUsZ0VBQWdFO01BQ2hFLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLDJCQUFtQjtNQUFuQixtQkFBbUI7SUFDckI7QUFDQTtPQUNHLHdDQUF3QztPQUN4QyxvQ0FBNEI7ZUFBNUIsNEJBQTRCO0lBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZS1saXN0L2FydGljbGUtY29udGVudC9hcnRpY2xlLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GdWdheitPbmV8UnllJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpbGl0YStPbmUmZGlzcGxheT1zd2FwJyk7XHJcbiAgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgICBjb2xvcjojMkY0RjRGXHRcdDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiB3YXZ5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHNhbG1vbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzgzM2FiNCwgI2ZkMWQxZCwgI2ZjYjA0NSk7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICBkaXZ7XHJcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICB9XHJcbiAgXHJcbiAgIC5jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAuYXJ0aWNsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICB3aWR0aDogMzElO1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXJ0aWNsZSBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFydGljbGUgaDIge1xyXG4gICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5kb3Qge1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveHtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHRvcDo1MCU7XHJcbiAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoLTUwJSAsLTUwJSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idHRue1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZlYWM1ZSwgI2M3NzlkMCwgIzRiYzBjOCk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZSc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjojMDAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6MjBweCA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgfVxyXG4gICAgLmJ0dG46aG92ZXJ7XHJcbiAgICAgICBib3gtc2hhZG93OjBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/articles/article-list/article-content/article-content.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/articles/article-list/article-content/article-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ArticleContentComponent */

  /***/
  function srcAppArticlesArticleListArticleContentArticleContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleContentComponent", function () {
      return ArticleContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../article.service */
    "./src/app/articles/article.service.ts");

    let ArticleContentComponent = class ArticleContentComponent {
      constructor(articleService) {
        this.articleService = articleService;
        this.articles = [];
        this.selectionCategory = '';
        this.searchedKeyword = '';
      }

      ngOnInit() {
        this.articles = this.articleService.articles;
        this.articleService.categorySelection.subscribe(category => {
          this.searchedKeyword = '';
          this.selectionCategory = category;
        });
        this.articleService.searchkeyword.subscribe(keyword => {
          this.selectionCategory = '';
          this.searchedKeyword = keyword;
        });
        this.resetList();
      }

      resetList() {
        this.articleService.resetList.subscribe(() => {
          this.selectionCategory = '';
          this.searchedKeyword = '';
        });
      }

      onSearchKeyword(name) {
        if (this.searchedKeyword == '') {
          return false;
        }

        return name.toLowerCase().includes(this.searchedKeyword.toLowerCase());
      }

      onSelectCategory(category) {
        if (this.selectionCategory == '') {
          return false;
        }

        return this.selectionCategory == category;
      }

    };

    ArticleContentComponent.ctorParameters = () => [{
      type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
    }];

    ArticleContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-content/article-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-content.component.css */
      "./src/app/articles/article-list/article-content/article-content.component.css")).default]
    })], ArticleContentComponent);
    /***/
  },

  /***/
  "./src/app/articles/article-list/article-list.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/articles/article-list/article-list.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesArticleListArticleListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#heading{\r\n  height: 64vh;\r\n  background: linear-gradient(-45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);\r\n  position: relative;\r\n  border-radius: 50px;\r\n}\r\n\r\nh2 {\r\n  letter-spacing: 2px;\r\n  color: black;\r\n  border: 3px solid black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  padding: 2rem;\r\n}\r\n\r\nimg{\r\n  border-radius: 50px;\r\n}\r\n\r\n.responsive {\r\n  width: 100%;\r\n  min-height: 64vh;\r\n}\r\n\r\ndiv{\r\n  font-family: 'Pacifico', cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1FQUFtRTtFQUNuRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRpbmd7XHJcbiAgaGVpZ2h0OiA2NHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsI0VFNzc1MiwjRTczQzdFLCMyM0E2RDUsIzIzRDVBQik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ucmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNjR2aDtcclxufVxyXG5cclxuZGl2e1xyXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/articles/article-list/article-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/articles/article-list/article-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppArticlesArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/articles/article.service.ts");

    let ArticleListComponent = class ArticleListComponent {
      constructor(articleService) {
        this.articleService = articleService;
      }

      ngOnInit() {
        this.featuredArticleid = this.articleService.getRandomArticle();
        this.featuredArticle = this.articleService.articles[this.featuredArticleid];
      }

    };

    ArticleListComponent.ctorParameters = () => [{
      type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
    }];

    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/article-list/article-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-list.component.css */
      "./src/app/articles/article-list/article-list.component.css")).default]
    })], ArticleListComponent);
    /***/
  },

  /***/
  "./src/app/articles/article-resolver.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/articles/article-resolver.service.ts ***!
    \******************************************************/

  /*! exports provided: ArticleResolverService */

  /***/
  function srcAppArticlesArticleResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleResolverService", function () {
      return ArticleResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    let ArticleResolverService = class ArticleResolverService {
      constructor(dataStorageService) {
        this.dataStorageService = dataStorageService;
      }

      resolve() {
        return this.dataStorageService.fetchArticles();
      }

    };

    ArticleResolverService.ctorParameters = () => [{
      type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]
    }];

    ArticleResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ArticleResolverService);
    /***/
  },

  /***/
  "./src/app/articles/articles-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/articles/articles-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ArticlesRoutingModule */

  /***/
  function srcAppArticlesArticlesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesRoutingModule", function () {
      return ArticlesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./articles.component */
    "./src/app/articles/articles.component.ts");
    /* harmony import */


    var _article_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./article-resolver.service */
    "./src/app/articles/article-resolver.service.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/articles/article-list/article-list.component.ts");
    /* harmony import */


    var _article_list_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./article-list/article-content/article-content.component */
    "./src/app/articles/article-list/article-content/article-content.component.ts");
    /* harmony import */


    var _myarticles_myarticles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myarticles/myarticles.component */
    "./src/app/articles/myarticles/myarticles.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _myarticles_mycontent_mycontent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./myarticles/mycontent/mycontent.component */
    "./src/app/articles/myarticles/mycontent/mycontent.component.ts");
    /* harmony import */


    var _myarticles_myarticle_edit_myarticle_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./myarticles/myarticle-edit/myarticle-edit.component */
    "./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.ts");
    /* harmony import */


    var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./article-detail/article-detail.component */
    "./src/app/articles/article-detail/article-detail.component.ts");

    const routes = [{
      path: '',
      component: _articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"],
      resolve: [_article_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ArticleResolverService"]],
      children: [{
        path: '',
        component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
        children: [{
          path: '',
          component: _article_list_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_6__["ArticleContentComponent"]
        }]
      }, {
        path: 'mypost',
        component: _myarticles_myarticles_component__WEBPACK_IMPORTED_MODULE_7__["MyarticlesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [{
          path: '',
          component: _myarticles_mycontent_mycontent_component__WEBPACK_IMPORTED_MODULE_9__["MycontentComponent"]
        }, {
          path: 'new',
          component: _myarticles_myarticle_edit_myarticle_edit_component__WEBPACK_IMPORTED_MODULE_10__["MyarticleEditComponent"]
        }, {
          path: ':id/edit',
          component: _myarticles_myarticle_edit_myarticle_edit_component__WEBPACK_IMPORTED_MODULE_10__["MyarticleEditComponent"]
        }]
      }, {
        path: ':id',
        component: _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDetailComponent"]
      }]
    }];
    let ArticlesRoutingModule = class ArticlesRoutingModule {};
    ArticlesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArticlesRoutingModule);
    /***/
  },

  /***/
  "./src/app/articles/articles.component.css":
  /*!*************************************************!*\
    !*** ./src/app/articles/articles.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesArticlesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/articles/articles.component.ts":
  /*!************************************************!*\
    !*** ./src/app/articles/articles.component.ts ***!
    \************************************************/

  /*! exports provided: ArticlesComponent */

  /***/
  function srcAppArticlesArticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () {
      return ArticlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ArticlesComponent = class ArticlesComponent {
      constructor() {}

      ngOnInit() {}

    };
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles.component.css */
      "./src/app/articles/articles.component.css")).default]
    })], ArticlesComponent);
    /***/
  },

  /***/
  "./src/app/articles/articles.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/articles/articles.module.ts ***!
    \*********************************************/

  /*! exports provided: ArticlesModule */

  /***/
  function srcAppArticlesArticlesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesModule", function () {
      return ArticlesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./articles.component */
    "./src/app/articles/articles.component.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/articles/article-list/article-list.component.ts");
    /* harmony import */


    var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./article-detail/article-detail.component */
    "./src/app/articles/article-detail/article-detail.component.ts");
    /* harmony import */


    var _article_list_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./article-list/article-content/article-content.component */
    "./src/app/articles/article-list/article-content/article-content.component.ts");
    /* harmony import */


    var _myarticles_myarticles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myarticles/myarticles.component */
    "./src/app/articles/myarticles/myarticles.component.ts");
    /* harmony import */


    var _myarticles_myarticle_edit_myarticle_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myarticles/myarticle-edit/myarticle-edit.component */
    "./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.ts");
    /* harmony import */


    var _myarticles_mycontent_mycontent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./myarticles/mycontent/mycontent.component */
    "./src/app/articles/myarticles/mycontent/mycontent.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _articles_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./articles-routing.module */
    "./src/app/articles/articles-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    let ArticlesModule = class ArticlesModule {};
    ArticlesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_articles_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"], _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_4__["ArticleDetailComponent"], _article_list_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_5__["ArticleContentComponent"], _myarticles_myarticles_component__WEBPACK_IMPORTED_MODULE_6__["MyarticlesComponent"], _myarticles_myarticle_edit_myarticle_edit_component__WEBPACK_IMPORTED_MODULE_7__["MyarticleEditComponent"], _myarticles_mycontent_mycontent_component__WEBPACK_IMPORTED_MODULE_8__["MycontentComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _articles_routing_module__WEBPACK_IMPORTED_MODULE_10__["ArticlesRoutingModule"]]
    })], ArticlesModule);
    /***/
  },

  /***/
  "./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesMyarticlesMyarticleEditMyarticleEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Bungee+Inline|Monoton|Saira+Stencil+One&display=swap');\r\n\r\ninput.ng-invalid.ng-touched,\r\nselect.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n    border: 1px solid tomato;\r\n}\r\n\r\ndiv{\r\n    font-family: 'Pacifico', cursive;\r\n  }\r\n\r\nh1 {\r\n\tfont-family: 'Monoton';\r\n}\r\n\r\ntextarea {\r\n\tresize: none;\r\n}\r\n\r\n.form-label {\r\n\tfont-size: 12px;\r\n\tcolor: #5e9bfc;\r\n\tmargin: 0;\r\n\tdisplay: block;\r\n\topacity: 1;\r\n}\r\n\r\n.form-control {\r\n\tborder-color: #ccc;\r\n   \tborder-width: 0 0 2px 0;\r\n   \tborder-style: none none solid none;\r\n    box-shadow: none;\r\n    font-size: medium;\r\n}\r\n\r\n.form-control:focus {\r\n\tbox-shadow: none;\r\n\tborder-color: #5e9bfc;\r\n}\r\n\r\n.btn-start-order {\r\n\tbackground: 0 0 #ffffff;\r\n    border: 1px solid #2f323a;\r\n    color: #2f323a;\r\n    font-family: 'Saira Stencil One';\r\n\tfont-size: 16px;\r\n\tfont-weight: bolder;\r\n    margin: 30px 0;\r\n    padding: 10px 50px;\r\n    text-transform: uppercase;\r\n    -webkit-transition: all 0.25s ease 0s;\r\n    transition: all 0.25s ease 0s;\r\n}\r\n\r\n.btn-start-order:hover{\r\n\tborder-color: lightsalmon;\r\n\tcolor: lightcoral;\r\n}\r\n\r\n::-webkit-input-placeholder,select {\r\n\tcolor:lightcoral;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n\r\n::-moz-placeholder,select {\r\n\tcolor:lightcoral;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n\r\n::-ms-input-placeholder,select {\r\n\tcolor:lightcoral;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n\r\n::placeholder,select {\r\n\tcolor:lightcoral;\r\n\tfont-family: 'Bungee Inline';\r\n  }\r\n\r\n.btn-default:hover {\r\n\t  color:white;\r\n\t  background-color: black;\r\n  }\r\n\r\ninput[disabled]{\r\n\t  background-color: white;\r\n\tcolor:lightcoral;\r\n\tfont-family: 'Bungee Inline';\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvbXlhcnRpY2xlcy9teWFydGljbGUtZWRpdC9teWFydGljbGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJHQUEyRzs7QUFFM0c7OztJQUdJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztFQUNsQzs7QUFFRjtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsU0FBUztDQUNULGNBQWM7Q0FDZCxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxrQkFBa0I7SUFDZix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUNBO0NBQ0MsdUJBQXVCO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0NBQWdDO0NBQ25DLGVBQWU7Q0FDZixtQkFBbUI7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQTZCO0lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsNEJBQTRCO0VBQzNCOztBQUhGO0NBQ0MsZ0JBQWdCO0NBQ2hCLDRCQUE0QjtFQUMzQjs7QUFIRjtDQUNDLGdCQUFnQjtDQUNoQiw0QkFBNEI7RUFDM0I7O0FBSEY7Q0FDQyxnQkFBZ0I7Q0FDaEIsNEJBQTRCO0VBQzNCOztBQUNBO0dBQ0MsV0FBVztHQUNYLHVCQUF1QjtFQUN4Qjs7QUFDQTtHQUNDLHVCQUF1QjtDQUN6QixnQkFBZ0I7Q0FDaEIsNEJBQTRCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvbXlhcnRpY2xlcy9teWFydGljbGUtZWRpdC9teWFydGljbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CdW5nZWUrSW5saW5lfE1vbm90b258U2FpcmErU3RlbmNpbCtPbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0b21hdG87XHJcbn1cclxuXHJcbmRpdntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gIH1cclxuICBcclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAnTW9ub3Rvbic7XHJcbn1cclxudGV4dGFyZWEge1xyXG5cdHJlc2l6ZTogbm9uZTtcclxufVxyXG4uZm9ybS1sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGNvbG9yOiAjNWU5YmZjO1xyXG5cdG1hcmdpbjogMDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgXHRib3JkZXItd2lkdGg6IDAgMCAycHggMDtcclxuICAgXHRib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZCBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNWU5YmZjO1xyXG59XHJcbi5idG4tc3RhcnQtb3JkZXIge1xyXG5cdGJhY2tncm91bmQ6IDAgMCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJmMzIzYTtcclxuICAgIGNvbG9yOiAjMmYzMjNhO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBTdGVuY2lsIE9uZSc7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZSAwcztcclxufVxyXG4uYnRuLXN0YXJ0LW9yZGVyOmhvdmVye1xyXG5cdGJvcmRlci1jb2xvcjogbGlnaHRzYWxtb247XHJcblx0Y29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuOjpwbGFjZWhvbGRlcixzZWxlY3Qge1xyXG5cdGNvbG9yOmxpZ2h0Y29yYWw7XHJcblx0Zm9udC1mYW1pbHk6ICdCdW5nZWUgSW5saW5lJztcclxuICB9XHJcbiAgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuXHQgIGNvbG9yOndoaXRlO1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIGlucHV0W2Rpc2FibGVkXXtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOmxpZ2h0Y29yYWw7XHJcblx0Zm9udC1mYW1pbHk6ICdCdW5nZWUgSW5saW5lJztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MyarticleEditComponent */

  /***/
  function srcAppArticlesMyarticlesMyarticleEditMyarticleEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyarticleEditComponent", function () {
      return MyarticleEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../article.service */
    "./src/app/articles/article.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    let MyarticleEditComponent = class MyarticleEditComponent {
      constructor(route, articleService, router, dataStorageService) {
        this.route = route;
        this.articleService = articleService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.editMode = false;
      }

      ngOnInit() {
        this.currentDate = new Date().toISOString().slice(0, 10);
        const user = JSON.parse(sessionStorage.getItem('userData'));
        this.authorname = user.username.toUpperCase();
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        });
      }

      onSubmit() {
        console.log(this.articleForm);

        if (this.editMode) {
          this.articleService.updateArticle(this.id, this.articleForm.value);
        } else {
          this.articleService.addArticle(this.articleForm.value);
        }

        this.dataStorageService.storeArticles();
        this.onCancel();
      }

      onCancel() {
        this.router.navigate(['.'], {
          relativeTo: this.route.parent
        });
        window.scrollTo(0, 0);
      }

      onAddThings() {
        this.articleForm.get('things').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }));
      }

      onAddSteps() {
        this.articleForm.get('steps').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }));
      }

      onDeleteThing(index) {
        this.articleForm.get('things').removeAt(index);
      }

      onDeleteStep(index) {
        this.articleForm.get('steps').removeAt(index);
      }

      getControlsOfThings() {
        return this.articleForm.get('things').controls;
      }

      getControlsOfSteps() {
        return this.articleForm.get('steps').controls;
      }

      initForm() {
        let articleName = '';
        let articleDescription = '';
        let articleCategory = '';
        let articleImagePath = '';
        let articleAuthor = this.authorname;
        let articleAboutAuthor = '';
        let articleDate = this.currentDate;
        let articleTip = '';
        let articleThings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        let articleSteps = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);

        if (this.editMode) {
          const article = this.articleService.getArticle(this.id);
          articleName = article.name;
          articleDescription = article.description;
          articleCategory = article.category;
          articleImagePath = article.imagePath;
          articleAuthor = article.author;
          articleAboutAuthor = article.aboutauthor;
          articleDate = article.date;
          articleTip = article.tip;

          if (article['things']) {
            for (let thing of article.things) {
              articleThings.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](thing.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
              }));
            }
          }

          if (article['steps']) {
            for (let step of article.steps) {
              articleSteps.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](step.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](step.imagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
              }));
            }
          }
        }

        this.articleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleAuthor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'aboutauthor': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleAboutAuthor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'tip': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](articleTip, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          'things': articleThings,
          'steps': articleSteps
        });
      }

    };

    MyarticleEditComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]
    }];

    MyarticleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myarticle-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myarticle-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myarticle-edit.component.css */
      "./src/app/articles/myarticles/myarticle-edit/myarticle-edit.component.css")).default]
    })], MyarticleEditComponent);
    /***/
  },

  /***/
  "./src/app/articles/myarticles/myarticles.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/articles/myarticles/myarticles.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesMyarticlesMyarticlesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL215YXJ0aWNsZXMvbXlhcnRpY2xlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/articles/myarticles/myarticles.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/articles/myarticles/myarticles.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyarticlesComponent */

  /***/
  function srcAppArticlesMyarticlesMyarticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyarticlesComponent", function () {
      return MyarticlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MyarticlesComponent = class MyarticlesComponent {
      constructor() {}

      ngOnInit() {}

    };
    MyarticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myarticles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myarticles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/myarticles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myarticles.component.css */
      "./src/app/articles/myarticles/myarticles.component.css")).default]
    })], MyarticlesComponent);
    /***/
  },

  /***/
  "./src/app/articles/myarticles/mycontent/mycontent.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/articles/myarticles/mycontent/mycontent.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlesMyarticlesMycontentMycontentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Fugaz+One|Rye&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Mogra&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');\r\nimg{\r\n    border-radius: 50px;\r\n  }\r\nh1 {\r\n      color:#2F4F4F\t\t;\r\n      text-align: center;\r\n      text-decoration: underline;\r\n      -webkit-text-decoration-style: wavy;\r\n              text-decoration-style: wavy;\r\n      -webkit-text-decoration-color: salmon;\r\n              text-decoration-color: salmon;\r\n      font-weight: bold;\r\n      background: -webkit-gradient(linear, left top, right top, from(#833ab4), color-stop(#fd1d1d), to(#fcb045));\r\n      background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);\r\n      -webkit-background-clip: text;\r\n              background-clip: text;\r\n      -webkit-text-fill-color: transparent;\r\n  }\r\nh2 {\r\n    background: -webkit-gradient(linear, left top, right top, from(#ff512f), to(#dd2476));\r\n    background: linear-gradient(to right, #ff512f, #dd2476);\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-size: 24px;\r\n    font-family: 'Lilita One';\r\n      text-align: left;\r\n      margin-top: 240px;\r\n      padding-left: 30px;\r\n  }\r\ndiv{\r\n    font-family: 'Pacifico', cursive;\r\n  }\r\n.container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      width: auto;\r\n      margin: 0 auto;\r\n      flex-wrap: wrap;\r\n      -webkit-box-align: start;\r\n              align-items: flex-start;\r\n    }\r\n.article {\r\n      background-color: #fff;\r\n      padding: 30px;\r\n      margin: 10px 10px;\r\n      width: 31%;\r\n      color: #666666;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);\r\n    }\r\n.article img {\r\n      max-width: 100%;\r\n      height: auto;\r\n    }\r\n.article h2 {\r\n      color: #444;\r\n      margin-top: 0;\r\n    }\r\n.dot {\r\n      height: 10px;\r\n      width: 10px;\r\n      background-color: #bbb;\r\n      border-radius: 50%;\r\n      display: inline-block;\r\n    }\r\n.box{\r\n      position:absolute;\r\n      top:50%;\r\n      left:50%;\r\n      -webkit-transform : translate(-50% ,-50%);\r\n              transform : translate(-50% ,-50%);\r\n    }\r\n.bttn{\r\n      text-decoration: none;\r\n      text-transform:uppercase;\r\n      position:relative;\r\n      top:0;\r\n      left:0;\r\n      background: -webkit-gradient(linear, left top, right top, from(#feac5e), color-stop(#c779d0), to(#4bc0c8));\r\n      background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);\r\n      font-family: 'Lilita One';\r\n      font-weight: bold;\r\n      color:#000;\r\n      cursor: pointer;\r\n      padding:20px 40px;\r\n      border-radius:100px;\r\n      -webkit-transition: all .5s;\r\n      transition: all .5s;\r\n    }\r\n.bttn:hover{\r\n       box-shadow:0px 10px 10px rgba(0,0,0,0.2);\r\n       -webkit-transform : translateY(-3px);\r\n               transform : translateY(-3px);\r\n    }\r\n/*Tempory content*/\r\nmain{\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      padding: 80px;\r\n    }\r\n.square{\r\n      width: 460px;\r\n      height: 460px;\r\n      background: white;\r\n      border-radius: 4px;\r\n      box-shadow: 0px 20px 50px #D9DBDF;\r\n      -webkit-transition: all 0.3s ease;\r\n      transition: all 0.3s ease; \r\n    }\r\n.square:hover {\r\n        -webkit-transform: translate(0px, -10px);\r\n                transform: translate(0px, -10px);\r\n        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\r\n         }\r\n.mask{\r\n      clip: rect(0px, 460px, 220px, 0px);\r\n      border-radius: 4px;\r\n      position: absolute;\r\n      }\r\nimg{\r\n      width: 460px;\r\n      }\r\n.square>p{\r\n     padding-left: 30px;\r\n     padding-right: 30px;\r\n     font-family: 'Open Sans', sans-serif;\r\n     font-size: 18px;\r\n     font-weight: bold;\r\n     color: #2F4F4F;\r\n     line-height: 18px;\r\n    }\r\n.button {\r\n      background: -webkit-gradient(linear, left top, right top, from(#ff9966), to(#ff5e62));\r\n      background: linear-gradient(to right, #ff9966, #ff5e62);\r\n        color: black;\r\n        font-weight: bolder;\r\n        width: 90px;\r\n        padding: 10px 18px;\r\n        border-radius: 3px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: block;\r\n        margin-top: 20px;\r\n        margin-left: 30px;\r\n        margin-right: 70px;\r\n        font-size: 12px;\r\n        cursor: pointer;\r\n        font-family: 'Lilita One';\r\n    }\r\n    \r\n    \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvbXlhcnRpY2xlcy9teWNvbnRlbnQvbXljb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFLGlGQUFpRjtBQUNqRiw4RUFBOEU7QUFDOUUseUVBQXlFO0FBQ3pFLDZFQUE2RTtBQUczRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQixxQ0FBNkI7Y0FBN0IsNkJBQTZCO01BQzdCLGlCQUFpQjtNQUNqQiwwR0FBZ0U7TUFBaEUsZ0VBQWdFO01BQ2hFLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsb0NBQW9DO0VBQ3hDO0FBQ0E7SUFDRSxxRkFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZELDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZix5QkFBeUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0I7RUFDdEI7QUFFQTtJQUNFLGdDQUFnQztFQUNsQztBQUVDO01BQ0csb0JBQWE7TUFBYixhQUFhO01BQ2IsV0FBVztNQUNYLGNBQWM7TUFDZCxlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtBQUNBO01BQ0Usc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsMENBQTBDO0lBQzVDO0FBRUE7TUFDRSxlQUFlO01BQ2YsWUFBWTtJQUNkO0FBRUE7TUFDRSxXQUFXO01BQ1gsYUFBYTtJQUNmO0FBQ0E7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIscUJBQXFCO0lBQ3ZCO0FBQ0E7TUFDRSxpQkFBaUI7TUFDakIsT0FBTztNQUNQLFFBQVE7TUFDUix5Q0FBaUM7Y0FBakMsaUNBQWlDO0lBQ25DO0FBRUE7TUFDRSxxQkFBcUI7TUFDckIsd0JBQXdCO01BQ3hCLGlCQUFpQjtNQUNqQixLQUFLO01BQ0wsTUFBTTtNQUNOLDBHQUFnRTtNQUFoRSxnRUFBZ0U7TUFDaEUseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsMkJBQW1CO01BQW5CLG1CQUFtQjtJQUNyQjtBQUNBO09BQ0csd0NBQXdDO09BQ3hDLG9DQUE0QjtlQUE1Qiw0QkFBNEI7SUFDL0I7QUFDQSxrQkFBa0I7QUFDbEI7TUFDRSxvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLGFBQWE7SUFDZjtBQUVBO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGlDQUFpQztNQUNqQyxpQ0FBeUI7TUFBekIseUJBQXlCO0lBQzNCO0FBR0E7UUFDSSx3Q0FBZ0M7Z0JBQWhDLGdDQUFnQztRQUNoQywyQ0FBMkM7U0FDMUM7QUFHTDtNQUNFLGtDQUFrQztNQUNsQyxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCO0FBRUY7TUFDRSxZQUFZO01BQ1o7QUFFRjtLQUNDLGtCQUFrQjtLQUNsQixtQkFBbUI7S0FDbkIsb0NBQW9DO0tBQ3BDLGVBQWU7S0FDZixpQkFBaUI7S0FDakIsY0FBYztLQUNkLGlCQUFpQjtJQUNsQjtBQUVBO01BQ0UscUZBQXVEO01BQXZELHVEQUF1RDtRQUNyRCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlO1FBQ2YseUJBQXlCO0lBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvbXlhcnRpY2xlcy9teWNvbnRlbnQvbXljb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RnVnYXorT25lfFJ5ZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MaWxpdGErT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vZ3JhJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcnxPcGVuK1NhbnMnKTtcclxuXHJcblxyXG4gIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgICAgY29sb3I6IzJGNEY0Rlx0XHQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogd2F2eTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBzYWxtb247XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4MzNhYjQsICNmZDFkMWQsICNmY2IwNDUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY1MTJmLCAjZGQyNDc2KTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZSc7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gIH1cclxuICBcclxuICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5hcnRpY2xlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hcnRpY2xlIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXJ0aWNsZSBoMiB7XHJcbiAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmRvdCB7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJveHtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHRvcDo1MCU7XHJcbiAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoLTUwJSAsLTUwJSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idHRue1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZlYWM1ZSwgI2M3NzlkMCwgIzRiYzBjOCk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZSc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjojMDAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6MjBweCA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgfVxyXG4gICAgLmJ0dG46aG92ZXJ7XHJcbiAgICAgICBib3gtc2hhZG93OjBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIH1cclxuICAgIC8qVGVtcG9yeSBjb250ZW50Ki9cclxuICAgIG1haW57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3F1YXJle1xyXG4gICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgIGhlaWdodDogNDYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDUwcHggI0Q5REJERjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNxdWFyZTpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTBweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXNre1xyXG4gICAgICBjbGlwOiByZWN0KDBweCwgNDYwcHgsIDIyMHB4LCAwcHgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA0NjBweDtcclxuICAgICAgfVxyXG5cclxuICAgIC5zcXVhcmU+cHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjMkY0RjRGO1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY5OTY2LCAjZmY1ZTYyKTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/articles/myarticles/mycontent/mycontent.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/articles/myarticles/mycontent/mycontent.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MycontentComponent */

  /***/
  function srcAppArticlesMyarticlesMycontentMycontentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MycontentComponent", function () {
      return MycontentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../article.service */
    "./src/app/articles/article.service.ts");
    /* harmony import */


    var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    let MycontentComponent = class MycontentComponent {
      constructor(articleService, dataStorageService) {
        this.articleService = articleService;
        this.dataStorageService = dataStorageService;
        this.articles = [];
        this.count = 0;
      }

      ngOnInit() {
        this.articles = this.articleService.articles;
        const user = JSON.parse(sessionStorage.getItem('userData'));
        var temp = user.username;
        this.authorname = temp.split(" ").join("");
        this.authorname = this.authorname.toLowerCase();
        this.checkUserExists();
      }

      checkUserExists() {
        for (let i of this.articleService.articles) {
          var temp = i.author.split(" ").join("").toLowerCase();

          if (temp == this.authorname) {
            this.count++;
          }
        }
      }

      onDelete(index) {
        this.articleService.deleteArticle(index);
        this.dataStorageService.storeArticles();
        window.scrollTo(0, 0);
      }

      onSelectAuthor(author) {
        var temp = author.split(" ").join("");
        temp = temp.toLowerCase();

        if (temp == this.authorname) {
          return true;
        } else return false;
      }

      onAddPost() {
        window.scrollTo(0, 0);
      }

    };

    MycontentComponent.ctorParameters = () => [{
      type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
    }, {
      type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
    }];

    MycontentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mycontent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mycontent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/myarticles/mycontent/mycontent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mycontent.component.css */
      "./src/app/articles/myarticles/mycontent/mycontent.component.css")).default]
    })], MycontentComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AuthGuard = class AuthGuard {
      constructor(router) {
        this.router = router;
      }

      canActivate(route, state) {
        const user = JSON.parse(sessionStorage.getItem('userData'));

        if (!user) {
          this.router.navigate(['/auth']);
          return false;
        } else {
          return true;
        }
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  }
}]);
//# sourceMappingURL=articles-articles-module-es5.js.map