
import { useEffect, useState } from "react";



export default function PreLoad() {
  const [words, setWords] = useState('');
  const data = '卓美设计正在为您准备 AIGC 环境 AIGC 模型正在加载中 '.split('')
  let index = 0;
  let typeWords = ''
  function writing(index) {
    if (index < data.length) {
      typeWords += data[index]
      setWords(typeWords)
      setTimeout(writing.bind(this), 300, ++index)
    }
  }
  useEffect(() => {
    writing(index);
  }, []);
  return (
    <div className="loading">

      <img src="http://j.zhuomei.com.cn/img/2023/04/1681896612-6eaa4da0c6fa15f.png" style={{ width: 1200, margin: '95px auto', display: 'block' }} />
      <div id="tips">
        {words}
      </div>
      <div className="loader" />
      <div style={{ color: 'grey', fontSize: '12px', margin: '200px auto', textAlign: 'center' }}>注：频繁刷新可能会增加您的GPU消耗，喝杯咖啡耐心等待即可</div>
    </div>
  );
}


