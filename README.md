# FoodApp
Step 1 - ng add angular-cli-ghpages
Step 2 - push Code to githubRepo
Step 3 - go to repo setting and select main branch and save
Step 4 - build application using below cmd
      ng build --base-href "https://_githubProfileName_.github.io/_repoName_/"
Step 5 - publish your build changes from your local folder to github pages with below cmd
   npx angular-cli-ghpages --dir=dist/_repo_name_
Step 6 -  go to repo setting and select gh-pages branch and save

ng build --base-href "https://Lak007.github.io/FoodZapp/"

npx angular-cli-ghpages --dir=dist/food-app


{
    "/api": {
      "target": "https://freeapi.miniprojectideas.com",
      "secure": true,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }
  


   {
      "restaurantID": 3,
      "price": 0,
      "categoryName": "Burger",
      "description": "Burger",
      "restaurantName": "Burger King 2",
      "availability": true,
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      "openingHours": "6 - 11 PM",
      "categoryId": 15
    }