/**
 * Created by weimin on 16-11-22.
 */
var React = require('react');

import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.js';
var data=[
    {name:"张三",date:"10分钟前",text:"你好"},
    {name:"李斯",date:"11分钟前",text:"你也好"}
]

ReactDOM.render(<CommentBox data={data}/>, document.querySelector('#app'));
