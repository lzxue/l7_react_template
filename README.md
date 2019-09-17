### L7 React template
L7 依赖高德地图，目前高德地图只支持在线引入，因此在react使用L7需要动态加载 高德jsapi, jsapi加载完成后再进行L7 scene初始化。

使用之前切记将本示例的高德地图key，设置成自己的。

``` ./util/APILoader.js文件里配置 
const MAPKEY=""

```




## Available Scripts

### npm install 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
