/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-30 10:00:50
 * @LastEditors: Hexon
 * @LastEditTime: 2021-10-25 23:56:15
 */

// 屏幕高度：window.innerHeight

import React, { useState } from 'react';
import { Picker, List } from 'antd-mobile';
import './index.less';

const pickerData = [
  {
    value: 'beijing',
    label: '北京'
  },
  {
    value: 'shanghai',
    label: '上海'
  },
  {
    value: 'shenzhen',
    label: '深圳'
  },
  {
    value: 'changsha',
    label: '长沙'
  },
  {
    value: 'guangzhou',
    label: '广州'
  }
];

const Home = (): React.ReactElement => {
  const [elTopPos, setElTopPos] = useState(0);

  const screenH = window.innerHeight;
  const popH = 280;

  // 获取元素距离顶部的距离
  const getElTopPos = (className: string) => {
    const el = document.querySelector(className) as HTMLElement;
    const bodyScrollTop = document.body.scrollTop;
    const topPos = el?.offsetTop;
    return topPos - bodyScrollTop;
  };

  const getNeedScrollDis = () => {
    const topPos = getElTopPos('.pop-el');
    return screenH - topPos - popH;
  };

  // 计算可滚动的距离
  const getScrolledDis = () => {
    const contentH = (document.querySelector('.home') as HTMLElement).clientHeight;
    const bodyScrollTop = document.body.scrollTop;
    const dis = contentH - bodyScrollTop - screenH;
    return dis;
  };

  const setEmptyHeight = (height: number) => {
    const el = document.querySelector('.empty-el') as HTMLElement;
    el.style.height = `${height}px`;
    setTimeout(() => {
      document.body.style.overflow = 'scroll !important;';
    }, 1000);
  };

  const handlePickerHidden = () => {
    setEmptyHeight(0);
  };

  const getContentHeight = () => {
    const contentH = (document.querySelector('.home') as HTMLElement).clientHeight;
    return contentH;
  };

  const setScrollTop = (top: number) => {
    document.body.scrollTop = top;
  };

  const handleElPos = () => {
    const contentHeight = getContentHeight();
    if (contentHeight < screenH) {
      setEmptyHeight(popH);
      setScrollTop(popH);
      return;
    }
    const needScroll = getNeedScrollDis();
    const scrolledDis = getScrolledDis();
    if (needScroll < 0) {
      console.log('需要滚动', needScroll, scrolledDis);
      if (scrolledDis <= 0 || scrolledDis + needScroll < 0) {
        setEmptyHeight(Math.abs(needScroll) + 44);
        console.log('滚动的距离不够了');
      }
      // 滚动的距离足够
      const scrollDisTotal = document.body.scrollTop + Math.abs(needScroll) + 44;
      setScrollTop(scrollDisTotal);
    }
  };

  const handleVisibleChange = (visible: boolean) => {
    if (visible) {
      handleElPos();
    } else {
      handlePickerHidden();
    }
  };

  return (
    <div className="home">
      <ul className="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>

        <li>19</li>
        <li>20</li>
        <div className="pop-el">
          <Picker data={pickerData} cols={1} onVisibleChange={handleVisibleChange}
          >
            <List.Item arrow="horizontal">城市</List.Item>
          </Picker>
        </div>
        <li>16</li>
        <li>17</li>
        <li>18</li>

        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <div className="empty-el"></div>
      </ul>
    </div>
  );
};

export default Home;