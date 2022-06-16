export default {
    "swagger": "2.0",
    "info": {
      "description": "API of News",
      "version": "1.0.0",
      "title": "News-API",
      "contact": {
        "email": "hamilton_dino02@hotmail.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "localhost:3000",
    "basePath": "/news-api/v1",
    "tags": [
      {
        "name": "Category",
        "description": "Access to category"
      },
      {
        "name": "News",
        "description": "News from a category"
      }
    ],
    "schemes": [
      "http"
    ],
    "paths": {
      "/categorias": {
        "get": {
          "tags": [
            "Category"
          ],
          "description": "Get all categories",
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/CategoryReturnList"
              }
            }
          }
        },
        "post": {
          "tags": [
            "Category"
          ],
          "description": "Create a new category",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Category that needs to be added to the api",
              "required": true,
              "schema": {
                "$ref": "#/definitions/CategoryInput"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/CategoryReturn"
              }
            },
            "401": {
              "description": "error: Category is already exists."
            }
          }
        }
      },
      "/categorias/{id_categoria}/noticias": {
        "get": {
          "tags": [
            "News"
          ],
          "description": "Get all news from the category that id is {id_categoria}",
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id_categoria",
              "in": "path",
              "description": "The id of the category that you want to see the news. ",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/ReturnNewsList"
              }
            }
          }
        },
        "post": {
          "tags": [
            "News"
          ],
          "description": "Create a new News",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id_categoria",
              "in": "path",
              "description": "The id of the category that you news is from. ",
              "required": true,
              "type": "integer"
            },
            {
              "in": "body",
              "name": "body",
              "description": "News that needs to be added to the api",
              "required": true,
              "schema": {
                "$ref": "#/definitions/InputNews"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/ReturnNews"
              }
            },
            "401": {
              "description": "error: News is already exists."
            },
            "404": {
              "description": "error: Category not found."
            }
          }
        }
      },
      "/categorias/{id_categoria}/noticias/{id_noticia}": {
        "get": {
          "tags": [
            "News"
          ],
          "description": "Get the news that id is {id_noticia} from the category that id is {id_categoria}",
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id_categoria",
              "in": "path",
              "description": "The id of the category that you want to see the news. ",
              "required": true,
              "type": "integer"
            },
            {
              "name": "id_noticia",
              "in": "path",
              "description": "The id of the news that you want to see. ",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/ReturnNews"
              }
            },
            "404": {
              "description": "News not found"
            }
          }
        }
      }
    },
    "definitions": {
      "CategoryInput": {
        "type": "object",
        "required": [
          "name"
        ],
        "properties": {
          "name": {
            "type": "string"
          }
        }
      },
      "CategoryReturn": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "CategoryReturnList": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CategoryReturn"
        }
      },
      "InputNews": {
        "type": "object",
        "required": [
          "titulo",
          "conteudo"
        ],
        "properties": {
          "titulo": {
            "type": "string"
          },
          "conteudo": {
            "type": "string"
          }
        }
      },
      "ReturnNews": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "titulo": {
            "type": "string"
          },
          "conteudo": {
            "type": "string"
          }
        }
      },
      "ReturnNewsListObject": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "titulo": {
            "type": "string"
          }
        }
      },
      "ReturnNewsList": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ReturnNewsListObject"
        }
      }
    },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    }
  }