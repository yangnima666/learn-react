import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductParam } from '../../component'
import { useAppSelector } from '../../redux/hooks'
import { getProductInfo } from '../../redux/productInfo/slice'
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import './Detail.scss'

const Detail: React.FC = () => {

  const productInfo = useAppSelector(s => s.productInfo.data)
  const dispatch = useDispatch()
  const location = useLocation()
  const productId = location.pathname.slice(8)
  console.log(productId)
  const [version1, setversion1] = useState(false)
  const check1 = () => {
    setversion1(!version1)
    setversion2(false)
  }
  const [version2, setversion2] = useState(false)
  const check2 = () => {
    setversion2(!version2)
    setversion1(false)
  }

  useEffect(() => {
    dispatch(getProductInfo(productId))
  }, [])

  return (
    <div className="detail">
      <ProductParam productInfo={productInfo}></ProductParam>
      <div className="wrapper">
        <div className="container clearfix">
          <div className="swiper">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/imgs/detail/phone-1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/detail/phone-2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/detail/phone-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/detail/phone-4.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            {/* <swiper :options="swiperOption">
              <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
              <!-- Optional controls -->
              <div className="swiper-pagination"  slot="pagination"></div>
          </swiper> */}
          </div>
          <div className="content">
            <h2 className="item-title">{productInfo.name}</h2>
            <p className="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br />外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
            <div className="delivery">小米自营</div>
            <div className="item-price">{productInfo.price}元<span className="del">1999元</span></div>
            <div className="line"></div>
            <div className="item-addr">
              <i className="icon-loc"></i>
              <div className="addr">北京 北京市 朝阳区 安定门街道</div>
              <div className="stock">有现货</div>
            </div>
            <div className="item-version clearfix">
              <h2>选择版本</h2>
              {
                (!version1 && version2)? (
                  <div onClick={check1}>
                    <div className="phone fl" >6GB+64GB 全网通</div>
                  </div>

                ) : (
                  <div onClick={check1}>
                    <div className="phone fl checked" >6GB+64GB 全网通</div>
                  </div>

                )
              }
              {
                !version2 ? (
                  <>
                    <div onClick={check2}>
                      <div className="phone fr" >4GB+64GB 移动4G</div>
                    </div>
                  </>


                ) : (
                  <>
                    <div onClick={check2}>
                      <div className="phone fr checked" >4GB+64GB 移动4G</div>
                    </div>
                  </>


                )
              }
              {/* :className="{'checked':version==1}" @click="version=1" */}
              {/* <div className="phone fr" >4GB+64GB 移动4G</div> */}
              {/* :className="{'checked':version==2}" @click="version=2" */}
            </div>
            <div className="item-color">
              <h2>选择颜色</h2>
              <div className="phone checked">
                <span className="color"></span>
                深空灰
              </div>
            </div>
            <div className="item-total">
              <div className="phone-info clearfix">
                <div className="fl">{productInfo.name} {version1?'6GB+64GB 全网通':'4GB+64GB 移动4G'} 深灰色</div>
                {/* {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} */}
                <div className="fr">{productInfo.price}元</div>
              </div>
              <div className="phone-total">总计：{productInfo.price}元</div>
            </div>
            <div className="btn-group">
              <a href="#!" className="btn btn-huge fl" >加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <div className="price-info">
        <div className="container">
          <h2>价格说明</h2>
          <div className="desc">
            <img src="/imgs/detail/item-price.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail