import './App.css';
import Banner from './Banner'
import Content from './Content'
import React from 'react'
function App() {
  return (
    <>
    <div className='top'>
    <Banner></Banner>
    </div>
    <div className='body'>
      <Content title = '제목1' descrition = '내용1'></Content>
      <Content title = '제목2' descrition = '내용2'></Content>
      <Content title = '제목3' descrition = '내용3'></Content>
    </div>
    <div className='foot'></div>
    </>
  );
}

export default App;
