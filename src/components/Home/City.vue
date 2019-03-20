<template>
  <div class="js-container">
    <div class="page page_city_lists">
      <div class="fixed_header">
        <div class="comment-header rel new_m_header">
          <div class="header rel">
            <router-link to="/home">
              <div class="returnBack">
                <i id="returnBack"></i>
              </div>
            </router-link>
            <h3 class="js-drop max70">
              <span class="ellipsis">请选择城市</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="padding_wrap">
        <div class="search_wrap js_open_search">
          <div class="wrap">
            <div class="js_normal_wrap">
              <div class="icon_search"></div>
              <span>输入城市名或拼音查询</span>
            </div>
            <div class="js_input_wrap hidden city_search_wrap rel">
              <div class="icon_close hidden">
                <div class="r_l"></div>
                <div class="r_r"></div>
              </div>
              <!-- <input type="text" class="search_val"> -->
            </div>
          </div>
        </div>
        <div class="js_city_page">
          <div class="gps_wrap">无法获取您的定位</div>
          <div class="title">热门城市</div>
          <div class="city_wrap bgwhite">
            <div class="city_wrap bgwhite">
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=3"
                  onclick="change_store_city(3,'beijing')"
                  data-pingyin="beijing"
                  id="pingyin_3"
                  href="/beijing"
                  data-id="3"
                >北京</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=4"
                  onclick="change_store_city(4,'shanghai')"
                  data-pingyin="shanghai"
                  id="pingyin_4"
                  href="/shanghai"
                  data-id="4"
                >上海</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=5"
                  onclick="change_store_city(5,'tianjin')"
                  data-pingyin="tianjin"
                  id="pingyin_5"
                  href="/tianjin"
                  data-id="5"
                >天津</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=6"
                  onclick="change_store_city(6,'chongqing')"
                  data-pingyin="chongqing"
                  id="pingyin_6"
                  href="/chongqing"
                  data-id="6"
                >重庆</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=48"
                  onclick="change_store_city(48,'shenzhen')"
                  data-pingyin="shenzhen"
                  id="pingyin_48"
                  href="/shenzhen"
                  data-id="48"
                >深圳</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=151"
                  onclick="change_store_city(151,'wuhan')"
                  data-pingyin="wuhan"
                  id="pingyin_151"
                  href="/wuhan"
                  data-id="151"
                >武汉</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=25"
                  onclick="change_store_city(25,'xiamen')"
                  data-pingyin="xiamen"
                  id="pingyin_25"
                  href="/xiamen"
                  data-id="25"
                >厦门</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=26"
                  onclick="change_store_city(26,'quanzhou')"
                  data-pingyin="quanzhou"
                  id="pingyin_26"
                  href="/quanzhou"
                  data-id="26"
                >泉州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=30"
                  onclick="change_store_city(30,'putian')"
                  data-pingyin="putian"
                  id="pingyin_30"
                  href="/putian"
                  data-id="30"
                >莆田</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=32"
                  onclick="change_store_city(32,'zhangzhou')"
                  data-pingyin="zhangzhou"
                  id="pingyin_32"
                  href="/zhangzhou"
                  data-id="32"
                >漳州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=33"
                  onclick="change_store_city(33,'lanzhou')"
                  data-pingyin="lanzhou"
                  id="pingyin_33"
                  href="/lanzhou"
                  data-id="33"
                >兰州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=47"
                  onclick="change_store_city(47,'guangzhou')"
                  data-pingyin="guangzhou"
                  id="pingyin_47"
                  href="/guangzhou"
                  data-id="47"
                >广州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=191"
                  onclick="change_store_city(191,'nanjing')"
                  data-pingyin="nanjing"
                  id="pingyin_191"
                  href="/nanjing"
                  data-id="191"
                >南京</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=49"
                  onclick="change_store_city(49,'zhuhai')"
                  data-pingyin="zhuhai"
                  id="pingyin_49"
                  href="/zhuhai"
                  data-id="49"
                >珠海</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=351"
                  onclick="change_store_city(351,'hangzhou')"
                  data-pingyin="hangzhou"
                  id="pingyin_351"
                  href="/hangzhou"
                  data-id="351"
                >杭州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=51"
                  onclick="change_store_city(51,'foshan')"
                  data-pingyin="foshan"
                  id="pingyin_51"
                  href="/foshan"
                  data-id="51"
                >佛山</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=53"
                  onclick="change_store_city(53,'jiangmen')"
                  data-pingyin="jiangmen"
                  id="pingyin_53"
                  href="/jiangmen"
                  data-id="53"
                >江门</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=54"
                  onclick="change_store_city(54,'zhongshan')"
                  data-pingyin="zhongshan"
                  id="pingyin_54"
                  href="/zhongshan"
                  data-id="54"
                >中山</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=55"
                  onclick="change_store_city(55,'shantou')"
                  data-pingyin="shantou"
                  id="pingyin_55"
                  href="/shantou"
                  data-id="55"
                >汕头</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=56"
                  onclick="change_store_city(56,'zhanjiang')"
                  data-pingyin="zhanjiang"
                  id="pingyin_56"
                  href="/zhanjiang"
                  data-id="56"
                >湛江</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=68"
                  onclick="change_store_city(68,'nanning')"
                  data-pingyin="nanning"
                  id="pingyin_68"
                  href="/nanning"
                  data-id="68"
                >南宁</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=71"
                  onclick="change_store_city(71,'guilin')"
                  data-pingyin="guilin"
                  id="pingyin_71"
                  href="/guilin"
                  data-id="71"
                >桂林</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=82"
                  onclick="change_store_city(82,'guiyang')"
                  data-pingyin="guiyang"
                  id="pingyin_82"
                  href="/guiyang"
                  data-id="82"
                >贵阳</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=91"
                  onclick="change_store_city(91,'haikou')"
                  data-pingyin="haikou"
                  id="pingyin_91"
                  href="/haikou"
                  data-id="91"
                >海口</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=109"
                  onclick="change_store_city(109,'shijiazhuang')"
                  data-pingyin="shijiazhuang"
                  id="pingyin_109"
                  href="/shijiazhuang"
                  data-id="109"
                >石家庄</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=113"
                  onclick="change_store_city(113,'tangshan')"
                  data-pingyin="tangshan"
                  id="pingyin_113"
                  href="/tangshan"
                  data-id="113"
                >唐山</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=24"
                  onclick="change_store_city(24,'fuzhou')"
                  data-pingyin="fuzhou"
                  id="pingyin_24"
                  href="/fuzhou"
                  data-id="24"
                >福州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=138"
                  onclick="change_store_city(138,'haerbin')"
                  data-pingyin="haerbin"
                  id="pingyin_138"
                  href="/haerbin"
                  data-id="138"
                >哈尔滨</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=120"
                  onclick="change_store_city(120,'zhengzhou')"
                  data-pingyin="zhengzhou"
                  id="pingyin_120"
                  href="/zhengzhou"
                  data-id="120"
                >郑州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=152"
                  onclick="change_store_city(152,'xiangyang')"
                  data-pingyin="xiangyang"
                  id="pingyin_152"
                  href="/xiangyang"
                  data-id="152"
                >襄阳</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=157"
                  onclick="change_store_city(157,'huanggang')"
                  data-pingyin="huanggang"
                  id="pingyin_157"
                  href="/huanggang"
                  data-id="157"
                >黄冈</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=254"
                  onclick="change_store_city(254,'jinan')"
                  data-pingyin="jinan"
                  id="pingyin_254"
                  href="/jinan"
                  data-id="254"
                >济南</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=173"
                  onclick="change_store_city(173,'hengyang')"
                  data-pingyin="hengyang"
                  id="pingyin_173"
                  href="/hengyang"
                  data-id="173"
                >衡阳</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=179"
                  onclick="change_store_city(179,'zhuzhou')"
                  data-pingyin="zhuzhou"
                  id="pingyin_179"
                  href="/zhuzhou"
                  data-id="179"
                >株洲</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=182"
                  onclick="change_store_city(182,'changchun')"
                  data-pingyin="changchun"
                  id="pingyin_182"
                  href="/changchun"
                  data-id="182"
                >长春</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=282"
                  onclick="change_store_city(282,'xian')"
                  data-pingyin="xian"
                  id="pingyin_282"
                  href="/xian"
                  data-id="282"
                >西安</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=7"
                  onclick="change_store_city(7,'hefei')"
                  data-pingyin="hefei"
                  id="pingyin_7"
                  href="/hefei"
                  data-id="7"
                >合肥</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=168"
                  onclick="change_store_city(168,'changsha')"
                  data-pingyin="changsha"
                  id="pingyin_168"
                  href="/changsha"
                  data-id="168"
                >长沙</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=195"
                  onclick="change_store_city(195,'taizhou')"
                  data-pingyin="taizhou"
                  id="pingyin_195"
                  href="/taizhou"
                  data-id="195"
                >泰州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=192"
                  onclick="change_store_city(192,'suzhou')"
                  data-pingyin="suzhou"
                  id="pingyin_192"
                  href="/suzhou"
                  data-id="192"
                >苏州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=197"
                  onclick="change_store_city(197,'xuzhou')"
                  data-pingyin="xuzhou"
                  id="pingyin_197"
                  href="/xuzhou"
                  data-id="197"
                >徐州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=198"
                  onclick="change_store_city(198,'yangzhou')"
                  data-pingyin="yangzhou"
                  id="pingyin_198"
                  href="/yangzhou"
                  data-id="198"
                >扬州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=193"
                  onclick="change_store_city(193,'changzhou')"
                  data-pingyin="changzhou"
                  id="pingyin_193"
                  href="/changzhou"
                  data-id="193"
                >常州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=203"
                  onclick="change_store_city(203,'yancheng')"
                  data-pingyin="yancheng"
                  id="pingyin_203"
                  href="/yancheng"
                  data-id="203"
                >盐城</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=196"
                  onclick="change_store_city(196,'wuxi')"
                  data-pingyin="wuxi"
                  id="pingyin_196"
                  href="/wuxi"
                  data-id="196"
                >无锡</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=215"
                  onclick="change_store_city(215,'shenyang')"
                  data-pingyin="shenyang"
                  id="pingyin_215"
                  href="/shenyang"
                  data-id="215"
                >沈阳</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=216"
                  onclick="change_store_city(216,'dalian')"
                  data-pingyin="dalian"
                  id="pingyin_216"
                  href="/dalian"
                  data-id="216"
                >大连</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=229"
                  onclick="change_store_city(229,'huhehaote')"
                  data-pingyin="huhehaote"
                  id="pingyin_229"
                  href="/huhehaote"
                  data-id="229"
                >呼和浩特</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=230"
                  onclick="change_store_city(230,'baotou')"
                  data-pingyin="baotou"
                  id="pingyin_230"
                  href="/baotou"
                  data-id="230"
                >包头</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=231"
                  onclick="change_store_city(231,'chifeng')"
                  data-pingyin="chifeng"
                  id="pingyin_231"
                  href="/chifeng"
                  data-id="231"
                >赤峰</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=50"
                  onclick="change_store_city(50,'dongguan')"
                  data-pingyin="dongguan"
                  id="pingyin_50"
                  href="/dongguan"
                  data-id="50"
                >东莞</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=255"
                  onclick="change_store_city(255,'qingdao')"
                  data-pingyin="qingdao"
                  id="pingyin_255"
                  href="/qingdao"
                  data-id="255"
                >青岛</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=257"
                  onclick="change_store_city(257,'yantai')"
                  data-pingyin="yantai"
                  id="pingyin_257"
                  href="/yantai"
                  data-id="257"
                >烟台</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=271"
                  onclick="change_store_city(271,'taiyuan')"
                  data-pingyin="taiyuan"
                  id="pingyin_271"
                  href="/taiyuan"
                  data-id="271"
                >太原</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=273"
                  onclick="change_store_city(273,'datong')"
                  data-pingyin="datong"
                  id="pingyin_273"
                  href="/datong"
                  data-id="273"
                >大同</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=201"
                  onclick="change_store_city(201,'nantong')"
                  data-pingyin="nantong"
                  id="pingyin_201"
                  href="/nantong"
                  data-id="201"
                >南通</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=292"
                  onclick="change_store_city(292,'chengdu')"
                  data-pingyin="chengdu"
                  id="pingyin_292"
                  href="/chengdu"
                  data-id="292"
                >成都</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=293"
                  onclick="change_store_city(293,'mianyang')"
                  data-pingyin="mianyang"
                  id="pingyin_293"
                  href="/mianyang"
                  data-id="293"
                >绵阳</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=320"
                  onclick="change_store_city(320,'wulumuqi')"
                  data-pingyin="wulumuqi"
                  id="pingyin_320"
                  href="/wulumuqi"
                  data-id="320"
                >乌鲁木齐</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=335"
                  onclick="change_store_city(335,'kunming')"
                  data-pingyin="kunming"
                  id="pingyin_335"
                  href="/kunming"
                  data-id="335"
                >昆明</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=204"
                  onclick="change_store_city(204,'nanchang')"
                  data-pingyin="nanchang"
                  id="pingyin_204"
                  href="/nanchang"
                  data-id="204"
                >南昌</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=352"
                  onclick="change_store_city(352,'ningbo')"
                  data-pingyin="ningbo"
                  id="pingyin_352"
                  href="/ningbo"
                  data-id="352"
                >宁波</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=353"
                  onclick="change_store_city(353,'jiaxing')"
                  data-pingyin="jiaxing"
                  id="pingyin_353"
                  href="/jiaxing"
                  data-id="353"
                >嘉兴</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=354"
                  onclick="change_store_city(354,'shaoxing')"
                  data-pingyin="shaoxing"
                  id="pingyin_354"
                  href="/shaoxing"
                  data-id="354"
                >绍兴</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=355"
                  onclick="change_store_city(355,'wenzhou')"
                  data-pingyin="wenzhou"
                  id="pingyin_355"
                  href="/wenzhou"
                  data-id="355"
                >温州</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=357"
                  onclick="change_store_city(357,'huzhou')"
                  data-pingyin="huzhou"
                  id="pingyin_357"
                  href="/huzhou"
                  data-id="357"
                >湖州</a>
              </div>
              <div class="flex_wrap">
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=358"
                  onclick="change_store_city(358,'jinhua')"
                  data-pingyin="jinhua"
                  id="pingyin_358"
                  href="/jinhua"
                  data-id="358"
                >金华</a>
                <a
                  class="item js_item"
                  data-external="actioncode=city&amp;city_id=360"
                  onclick="change_store_city(360,'taizhou1')"
                  data-pingyin="taizhou1"
                  id="pingyin_360"
                  href="/taizhou1"
                  data-id="360"
                >台州</a>
                <div class="item vsh"></div>
              </div>
            </div>
          </div>
          <div class="title">更多城市</div>
          <div class="alpha_wrap bgwhite">
            <div class="flex_wrap">
              <a class="item" href="#A">A</a>
              <a class="item" href="#B">B</a>
              <a class="item" href="#C">C</a>
              <a class="item" href="#D">D</a>
              <a class="item" href="#E">E</a>
            </div>
            <div class="flex_wrap">
              <a class="item" href="#F">F</a>
              <a class="item" href="#G">G</a>
              <a class="item" href="#H">H</a>
              <a class="item" href="#J">J</a>
              <a class="item" href="#K">K</a>
            </div>
            <div class="flex_wrap">
              <a class="item" href="#L">L</a>
              <a class="item" href="#M">M</a>
              <a class="item" href="#N">N</a>
              <a class="item" href="#P">P</a>
              <a class="item" href="#Q">Q</a>
            </div>
            <div class="flex_wrap">
              <a class="item" href="#R">R</a>
              <a class="item" href="#S">S</a>
              <a class="item" href="#T">T</a>
              <a class="item" href="#W">W</a>
              <a class="item" href="#X">X</a>
            </div>
            <div class="flex_wrap">
              <a class="item" href="#Y">Y</a>
              <a class="item" href="#Z">Z</a>
              <a class="item vsh"></a>
              <a class="item vsh"></a>
              <a class="item vsh"></a>
            </div>
          </div>
          <div class="title" id="A">A</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=9"
                onclick="change_store_city(9,'anqing')"
                data-pingyin="anqing"
                id="pingyin_9"
                href="/anqing"
                data-id="9"
              >安庆</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=83"
                onclick="change_store_city(83,'anshun')"
                data-pingyin="anshun"
                id="pingyin_83"
                href="/anshun"
                data-id="83"
              >安顺</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=124"
                onclick="change_store_city(124,'anyang')"
                data-pingyin="anyang"
                id="pingyin_124"
                href="/anyang"
                data-id="124"
              >安阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=217"
                onclick="change_store_city(217,'anshan')"
                data-pingyin="anshan"
                id="pingyin_217"
                href="/anshan"
                data-id="217"
              >鞍山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=238"
                onclick="change_store_city(238,'alashanmeng')"
                data-pingyin="alashanmeng"
                id="pingyin_238"
                href="/alashanmeng"
                data-id="238"
              >阿拉善盟</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=283"
                onclick="change_store_city(283,'ankang')"
                data-pingyin="ankang"
                id="pingyin_283"
                href="/ankang"
                data-id="283"
              >安康</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=310"
                onclick="change_store_city(310,'aba')"
                data-pingyin="aba"
                id="pingyin_310"
                href="/aba"
                data-id="310"
              >阿坝</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=315"
                onclick="change_store_city(315,'ali')"
                data-pingyin="ali"
                id="pingyin_315"
                href="/ali"
                data-id="315"
              >阿里</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=324"
                onclick="change_store_city(324,'akesu')"
                data-pingyin="akesu"
                id="pingyin_324"
                href="/akesu"
                data-id="324"
              >阿克苏</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=325"
                onclick="change_store_city(325,'aletai')"
                data-pingyin="aletai"
                id="pingyin_325"
                href="/aletai"
                data-id="325"
              >阿勒泰</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=363"
                onclick="change_store_city(363,'aomen')"
                data-pingyin="aomen"
                id="pingyin_363"
                href="/aomen"
                data-id="363"
              >澳门</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="B">B</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=3"
                onclick="change_store_city(3,'beijing')"
                data-pingyin="beijing"
                id="pingyin_3"
                href="/beijing"
                data-id="3"
              >北京</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=10"
                onclick="change_store_city(10,'bengbu')"
                data-pingyin="bengbu"
                id="pingyin_10"
                href="/bengbu"
                data-id="10"
              >蚌埠</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=11"
                onclick="change_store_city(11,'bozhou')"
                data-pingyin="bozhou"
                id="pingyin_11"
                href="/bozhou"
                data-id="11"
              >亳州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=34"
                onclick="change_store_city(34,'baiyin')"
                data-pingyin="baiyin"
                id="pingyin_34"
                href="/baiyin"
                data-id="34"
              >白银</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=69"
                onclick="change_store_city(69,'beihai')"
                data-pingyin="beihai"
                id="pingyin_69"
                href="/beihai"
                data-id="69"
              >北海</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=81"
                onclick="change_store_city(81,'baise')"
                data-pingyin="baise"
                id="pingyin_81"
                href="/baise"
                data-id="81"
              >百色</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=86"
                onclick="change_store_city(86,'bijie')"
                data-pingyin="bijie"
                id="pingyin_86"
                href="/bijie"
                data-id="86"
              >毕节</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=93"
                onclick="change_store_city(93,'baishaxian')"
                data-pingyin="baishaxian"
                id="pingyin_93"
                href="/baishaxian"
                data-id="93"
              >白沙县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=94"
                onclick="change_store_city(94,'baotingxian')"
                data-pingyin="baotingxian"
                id="pingyin_94"
                href="/baotingxian"
                data-id="94"
              >保亭县</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=110"
                onclick="change_store_city(110,'baoding')"
                data-pingyin="baoding"
                id="pingyin_110"
                href="/baoding"
                data-id="110"
              >保定</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=185"
                onclick="change_store_city(185,'baicheng')"
                data-pingyin="baicheng"
                id="pingyin_185"
                href="/baicheng"
                data-id="185"
              >白城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=186"
                onclick="change_store_city(186,'baishan')"
                data-pingyin="baishan"
                id="pingyin_186"
                href="/baishan"
                data-id="186"
              >白山</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=222"
                onclick="change_store_city(222,'benxi')"
                data-pingyin="benxi"
                id="pingyin_222"
                href="/benxi"
                data-id="222"
              >本溪</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=230"
                onclick="change_store_city(230,'baotou')"
                data-pingyin="baotou"
                id="pingyin_230"
                href="/baotou"
                data-id="230"
              >包头</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=239"
                onclick="change_store_city(239,'bayannaoer')"
                data-pingyin="bayannaoer"
                id="pingyin_239"
                href="/bayannaoer"
                data-id="239"
              >巴彦淖尔</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=260"
                onclick="change_store_city(260,'binzhou')"
                data-pingyin="binzhou"
                id="pingyin_260"
                href="/binzhou"
                data-id="260"
              >滨州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=284"
                onclick="change_store_city(284,'baoji')"
                data-pingyin="baoji"
                id="pingyin_284"
                href="/baoji"
                data-id="284"
              >宝鸡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=295"
                onclick="change_store_city(295,'bazhong')"
                data-pingyin="bazhong"
                id="pingyin_295"
                href="/bazhong"
                data-id="295"
              >巴中</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=326"
                onclick="change_store_city(326,'bayin')"
                data-pingyin="bayin"
                id="pingyin_326"
                href="/bayin"
                data-id="326"
              >巴音</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=327"
                onclick="change_store_city(327,'boertala')"
                data-pingyin="boertala"
                id="pingyin_327"
                href="/boertala"
                data-id="327"
              >博尔塔拉</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=343"
                onclick="change_store_city(343,'baoshan')"
                data-pingyin="baoshan"
                id="pingyin_343"
                href="/baoshan"
                data-id="343"
              >保山</a>
            </div>
          </div>
          <div class="title" id="C">C</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=6"
                onclick="change_store_city(6,'chongqing')"
                data-pingyin="chongqing"
                id="pingyin_6"
                href="/chongqing"
                data-id="6"
              >重庆</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=12"
                onclick="change_store_city(12,'chaohu')"
                data-pingyin="chaohu"
                id="pingyin_12"
                href="/chaohu"
                data-id="12"
              >巢湖</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=13"
                onclick="change_store_city(13,'chizhou')"
                data-pingyin="chizhou"
                id="pingyin_13"
                href="/chizhou"
                data-id="13"
              >池州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=14"
                onclick="change_store_city(14,'chuzhou')"
                data-pingyin="chuzhou"
                id="pingyin_14"
                href="/chuzhou"
                data-id="14"
              >滁州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=57"
                onclick="change_store_city(57,'chaozhou')"
                data-pingyin="chaozhou"
                id="pingyin_57"
                href="/chaozhou"
                data-id="57"
              >潮州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=73"
                onclick="change_store_city(73,'chongzuo')"
                data-pingyin="chongzuo"
                id="pingyin_73"
                href="/chongzuo"
                data-id="73"
              >崇左</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=95"
                onclick="change_store_city(95,'changjiangxian')"
                data-pingyin="changjiangxian"
                id="pingyin_95"
                href="/changjiangxian"
                data-id="95"
              >昌江县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=96"
                onclick="change_store_city(96,'chengmaixian')"
                data-pingyin="chengmaixian"
                id="pingyin_96"
                href="/chengmaixian"
                data-id="96"
              >澄迈县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=111"
                onclick="change_store_city(111,'chengde')"
                data-pingyin="chengde"
                id="pingyin_111"
                href="/chengde"
                data-id="111"
              >承德</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=115"
                onclick="change_store_city(115,'cangzhou')"
                data-pingyin="cangzhou"
                id="pingyin_115"
                href="/cangzhou"
                data-id="115"
              >沧州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=171"
                onclick="change_store_city(171,'changde')"
                data-pingyin="changde"
                id="pingyin_171"
                href="/changde"
                data-id="171"
              >常德</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=172"
                onclick="change_store_city(172,'chenzhou')"
                data-pingyin="chenzhou"
                id="pingyin_172"
                href="/chenzhou"
                data-id="172"
              >郴州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=182"
                onclick="change_store_city(182,'changchun')"
                data-pingyin="changchun"
                id="pingyin_182"
                href="/changchun"
                data-id="182"
              >长春</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=168"
                onclick="change_store_city(168,'changsha')"
                data-pingyin="changsha"
                id="pingyin_168"
                href="/changsha"
                data-id="168"
              >长沙</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=193"
                onclick="change_store_city(193,'changzhou')"
                data-pingyin="changzhou"
                id="pingyin_193"
                href="/changzhou"
                data-id="193"
              >常州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=223"
                onclick="change_store_city(223,'chaoyang')"
                data-pingyin="chaoyang"
                id="pingyin_223"
                href="/chaoyang"
                data-id="223"
              >朝阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=231"
                onclick="change_store_city(231,'chifeng')"
                data-pingyin="chifeng"
                id="pingyin_231"
                href="/chifeng"
                data-id="231"
              >赤峰</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=272"
                onclick="change_store_city(272,'changzhi')"
                data-pingyin="changzhi"
                id="pingyin_272"
                href="/changzhi"
                data-id="272"
              >长治</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=292"
                onclick="change_store_city(292,'chengdu')"
                data-pingyin="chengdu"
                id="pingyin_292"
                href="/chengdu"
                data-id="292"
              >成都</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=316"
                onclick="change_store_city(316,'changdou')"
                data-pingyin="changdou"
                id="pingyin_316"
                href="/changdou"
                data-id="316"
              >昌都</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=328"
                onclick="change_store_city(328,'changji')"
                data-pingyin="changji"
                id="pingyin_328"
                href="/changji"
                data-id="328"
              >昌吉</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=337"
                onclick="change_store_city(337,'chuxiong')"
                data-pingyin="chuxiong"
                id="pingyin_337"
                href="/chuxiong"
                data-id="337"
              >楚雄</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="D">D</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=35"
                onclick="change_store_city(35,'dingxi')"
                data-pingyin="dingxi"
                id="pingyin_35"
                href="/dingxi"
                data-id="35"
              >定西</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=97"
                onclick="change_store_city(97,'dinganxian')"
                data-pingyin="dinganxian"
                id="pingyin_97"
                href="/dinganxian"
                data-id="97"
              >定安县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=98"
                onclick="change_store_city(98,'dongfang')"
                data-pingyin="dongfang"
                id="pingyin_98"
                href="/dongfang"
                data-id="98"
              >东方</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=108"
                onclick="change_store_city(108,'danzhou')"
                data-pingyin="danzhou"
                id="pingyin_108"
                href="/danzhou"
                data-id="108"
              >儋州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=139"
                onclick="change_store_city(139,'daqing')"
                data-pingyin="daqing"
                id="pingyin_139"
                href="/daqing"
                data-id="139"
              >大庆</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=142"
                onclick="change_store_city(142,'daxinganling')"
                data-pingyin="daxinganling"
                id="pingyin_142"
                href="/daxinganling"
                data-id="142"
              >大兴安岭</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=216"
                onclick="change_store_city(216,'dalian')"
                data-pingyin="dalian"
                id="pingyin_216"
                href="/dalian"
                data-id="216"
              >大连</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=218"
                onclick="change_store_city(218,'dandong')"
                data-pingyin="dandong"
                id="pingyin_218"
                href="/dandong"
                data-id="218"
              >丹东</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=50"
                onclick="change_store_city(50,'dongguan')"
                data-pingyin="dongguan"
                id="pingyin_50"
                href="/dongguan"
                data-id="50"
              >东莞</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=261"
                onclick="change_store_city(261,'dezhou')"
                data-pingyin="dezhou"
                id="pingyin_261"
                href="/dezhou"
                data-id="261"
              >德州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=262"
                onclick="change_store_city(262,'dongying')"
                data-pingyin="dongying"
                id="pingyin_262"
                href="/dongying"
                data-id="262"
              >东营</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=273"
                onclick="change_store_city(273,'datong')"
                data-pingyin="datong"
                id="pingyin_273"
                href="/datong"
                data-id="273"
              >大同</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=296"
                onclick="change_store_city(296,'deyang')"
                data-pingyin="deyang"
                id="pingyin_296"
                href="/deyang"
                data-id="296"
              >德阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=297"
                onclick="change_store_city(297,'dazhou')"
                data-pingyin="dazhou"
                id="pingyin_297"
                href="/dazhou"
                data-id="297"
              >达州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=338"
                onclick="change_store_city(338,'dali')"
                data-pingyin="dali"
                id="pingyin_338"
                href="/dali"
                data-id="338"
              >大理</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=344"
                onclick="change_store_city(344,'dehong')"
                data-pingyin="dehong"
                id="pingyin_344"
                href="/dehong"
                data-id="344"
              >德宏</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=345"
                onclick="change_store_city(345,'diqing')"
                data-pingyin="diqing"
                id="pingyin_345"
                href="/diqing"
                data-id="345"
              >迪庆</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="E">E</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=155"
                onclick="change_store_city(155,'ezhou')"
                data-pingyin="ezhou"
                id="pingyin_155"
                href="/ezhou"
                data-id="155"
              >鄂州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=156"
                onclick="change_store_city(156,'enshi')"
                data-pingyin="enshi"
                id="pingyin_156"
                href="/enshi"
                data-id="156"
              >恩施</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=232"
                onclick="change_store_city(232,'eerduosi')"
                data-pingyin="eerduosi"
                id="pingyin_232"
                href="/eerduosi"
                data-id="232"
              >鄂尔多斯</a>
            </div>
          </div>
          <div class="title" id="F">F</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=15"
                onclick="change_store_city(15,'fuyang')"
                data-pingyin="fuyang"
                id="pingyin_15"
                href="/fuyang"
                data-id="15"
              >阜阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=51"
                onclick="change_store_city(51,'foshan')"
                data-pingyin="foshan"
                id="pingyin_51"
                href="/foshan"
                data-id="51"
              >佛山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=70"
                onclick="change_store_city(70,'fangchenggang')"
                data-pingyin="fangchenggang"
                id="pingyin_70"
                href="/fangchenggang"
                data-id="70"
              >防城港</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=24"
                onclick="change_store_city(24,'fuzhou')"
                data-pingyin="fuzhou"
                id="pingyin_24"
                href="/fuzhou"
                data-id="24"
              >福州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=214"
                onclick="change_store_city(214,'fuzhou1')"
                data-pingyin="fuzhou1"
                id="pingyin_214"
                href="/fuzhou1"
                data-id="214"
              >抚州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=219"
                onclick="change_store_city(219,'fushun')"
                data-pingyin="fushun"
                id="pingyin_219"
                href="/fushun"
                data-id="219"
              >抚顺</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=224"
                onclick="change_store_city(224,'fuxin')"
                data-pingyin="fuxin"
                id="pingyin_224"
                href="/fuxin"
                data-id="224"
              >阜新</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="G">G</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=43"
                onclick="change_store_city(43,'gannan')"
                data-pingyin="gannan"
                id="pingyin_43"
                href="/gannan"
                data-id="43"
              >甘南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=47"
                onclick="change_store_city(47,'guangzhou')"
                data-pingyin="guangzhou"
                id="pingyin_47"
                href="/guangzhou"
                data-id="47"
              >广州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=71"
                onclick="change_store_city(71,'guilin')"
                data-pingyin="guilin"
                id="pingyin_71"
                href="/guilin"
                data-id="71"
              >桂林</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=78"
                onclick="change_store_city(78,'guigang')"
                data-pingyin="guigang"
                id="pingyin_78"
                href="/guigang"
                data-id="78"
              >贵港</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=82"
                onclick="change_store_city(82,'guiyang')"
                data-pingyin="guiyang"
                id="pingyin_82"
                href="/guiyang"
                data-id="82"
              >贵阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=205"
                onclick="change_store_city(205,'ganzhou')"
                data-pingyin="ganzhou"
                id="pingyin_205"
                href="/ganzhou"
                data-id="205"
              >赣州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=243"
                onclick="change_store_city(243,'guyuan')"
                data-pingyin="guyuan"
                id="pingyin_243"
                href="/guyuan"
                data-id="243"
              >固原</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=249"
                onclick="change_store_city(249,'guoluo')"
                data-pingyin="guoluo"
                id="pingyin_249"
                href="/guoluo"
                data-id="249"
              >果洛</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=298"
                onclick="change_store_city(298,'guangan')"
                data-pingyin="guangan"
                id="pingyin_298"
                href="/guangan"
                data-id="298"
              >广安</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=299"
                onclick="change_store_city(299,'guangyuan')"
                data-pingyin="guangyuan"
                id="pingyin_299"
                href="/guangyuan"
                data-id="299"
              >广元</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=311"
                onclick="change_store_city(311,'ganzi')"
                data-pingyin="ganzi"
                id="pingyin_311"
                href="/ganzi"
                data-id="311"
              >甘孜</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="H">H</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=16"
                onclick="change_store_city(16,'huangshan')"
                data-pingyin="huangshan"
                id="pingyin_16"
                href="/huangshan"
                data-id="16"
              >黄山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=17"
                onclick="change_store_city(17,'huaibei')"
                data-pingyin="huaibei"
                id="pingyin_17"
                href="/huaibei"
                data-id="17"
              >淮北</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=18"
                onclick="change_store_city(18,'huainan')"
                data-pingyin="huainan"
                id="pingyin_18"
                href="/huainan"
                data-id="18"
              >淮南</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=351"
                onclick="change_store_city(351,'hangzhou')"
                data-pingyin="hangzhou"
                id="pingyin_351"
                href="/hangzhou"
                data-id="351"
              >杭州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=52"
                onclick="change_store_city(52,'huizhou')"
                data-pingyin="huizhou"
                id="pingyin_52"
                href="/huizhou"
                data-id="52"
              >惠州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=58"
                onclick="change_store_city(58,'heyuan')"
                data-pingyin="heyuan"
                id="pingyin_58"
                href="/heyuan"
                data-id="58"
              >河源</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=76"
                onclick="change_store_city(76,'hechi')"
                data-pingyin="hechi"
                id="pingyin_76"
                href="/hechi"
                data-id="76"
              >河池</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=79"
                onclick="change_store_city(79,'hezhou')"
                data-pingyin="hezhou"
                id="pingyin_79"
                href="/hezhou"
                data-id="79"
              >贺州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=91"
                onclick="change_store_city(91,'haikou')"
                data-pingyin="haikou"
                id="pingyin_91"
                href="/haikou"
                data-id="91"
              >海口</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=112"
                onclick="change_store_city(112,'handan')"
                data-pingyin="handan"
                id="pingyin_112"
                href="/handan"
                data-id="112"
              >邯郸</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=116"
                onclick="change_store_city(116,'hengshui')"
                data-pingyin="hengshui"
                id="pingyin_116"
                href="/hengshui"
                data-id="116"
              >衡水</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=126"
                onclick="change_store_city(126,'hebi')"
                data-pingyin="hebi"
                id="pingyin_126"
                href="/hebi"
                data-id="126"
              >鹤壁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=138"
                onclick="change_store_city(138,'haerbin')"
                data-pingyin="haerbin"
                id="pingyin_138"
                href="/haerbin"
                data-id="138"
              >哈尔滨</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=143"
                onclick="change_store_city(143,'heihe')"
                data-pingyin="heihe"
                id="pingyin_143"
                href="/heihe"
                data-id="143"
              >黑河</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=144"
                onclick="change_store_city(144,'hegang')"
                data-pingyin="hegang"
                id="pingyin_144"
                href="/hegang"
                data-id="144"
              >鹤岗</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=154"
                onclick="change_store_city(154,'huangshi')"
                data-pingyin="huangshi"
                id="pingyin_154"
                href="/huangshi"
                data-id="154"
              >黄石</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=157"
                onclick="change_store_city(157,'huanggang')"
                data-pingyin="huanggang"
                id="pingyin_157"
                href="/huanggang"
                data-id="157"
              >黄冈</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=173"
                onclick="change_store_city(173,'hengyang')"
                data-pingyin="hengyang"
                id="pingyin_173"
                href="/hengyang"
                data-id="173"
              >衡阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=174"
                onclick="change_store_city(174,'huaihua')"
                data-pingyin="huaihua"
                id="pingyin_174"
                href="/huaihua"
                data-id="174"
              >怀化</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=7"
                onclick="change_store_city(7,'hefei')"
                data-pingyin="hefei"
                id="pingyin_7"
                href="/hefei"
                data-id="7"
              >合肥</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=200"
                onclick="change_store_city(200,'huaian')"
                data-pingyin="huaian"
                id="pingyin_200"
                href="/huaian"
                data-id="200"
              >淮安</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=225"
                onclick="change_store_city(225,'huludao')"
                data-pingyin="huludao"
                id="pingyin_225"
                href="/huludao"
                data-id="225"
              >葫芦岛</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=229"
                onclick="change_store_city(229,'huhehaote')"
                data-pingyin="huhehaote"
                id="pingyin_229"
                href="/huhehaote"
                data-id="229"
              >呼和浩特</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=236"
                onclick="change_store_city(236,'hulunbeier')"
                data-pingyin="hulunbeier"
                id="pingyin_236"
                href="/hulunbeier"
                data-id="236"
              >呼伦贝尔</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=247"
                onclick="change_store_city(247,'huangnan')"
                data-pingyin="huangnan"
                id="pingyin_247"
                href="/huangnan"
                data-id="247"
              >黄南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=250"
                onclick="change_store_city(250,'haidong')"
                data-pingyin="haidong"
                id="pingyin_250"
                href="/haidong"
                data-id="250"
              >海东</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=251"
                onclick="change_store_city(251,'haixi')"
                data-pingyin="haixi"
                id="pingyin_251"
                href="/haixi"
                data-id="251"
              >海西</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=252"
                onclick="change_store_city(252,'hainan')"
                data-pingyin="hainan"
                id="pingyin_252"
                href="/hainan"
                data-id="252"
              >海南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=253"
                onclick="change_store_city(253,'haibei')"
                data-pingyin="haibei"
                id="pingyin_253"
                href="/haibei"
                data-id="253"
              >海北</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=263"
                onclick="change_store_city(263,'heze')"
                data-pingyin="heze"
                id="pingyin_263"
                href="/heze"
                data-id="263"
              >菏泽</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=285"
                onclick="change_store_city(285,'hanzhong')"
                data-pingyin="hanzhong"
                id="pingyin_285"
                href="/hanzhong"
                data-id="285"
              >汉中</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=329"
                onclick="change_store_city(329,'hami')"
                data-pingyin="hami"
                id="pingyin_329"
                href="/hami"
                data-id="329"
              >哈密</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=330"
                onclick="change_store_city(330,'hetian')"
                data-pingyin="hetian"
                id="pingyin_330"
                href="/hetian"
                data-id="330"
              >和田</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=339"
                onclick="change_store_city(339,'honghe')"
                data-pingyin="honghe"
                id="pingyin_339"
                href="/honghe"
                data-id="339"
              >红河</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=357"
                onclick="change_store_city(357,'huzhou')"
                data-pingyin="huzhou"
                id="pingyin_357"
                href="/huzhou"
                data-id="357"
              >湖州</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="J">J</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=36"
                onclick="change_store_city(36,'jinchang')"
                data-pingyin="jinchang"
                id="pingyin_36"
                href="/jinchang"
                data-id="36"
              >金昌</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=37"
                onclick="change_store_city(37,'jiuquan')"
                data-pingyin="jiuquan"
                id="pingyin_37"
                href="/jiuquan"
                data-id="37"
              >酒泉</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=44"
                onclick="change_store_city(44,'jiayuguan')"
                data-pingyin="jiayuguan"
                id="pingyin_44"
                href="/jiayuguan"
                data-id="44"
              >嘉峪关</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=53"
                onclick="change_store_city(53,'jiangmen')"
                data-pingyin="jiangmen"
                id="pingyin_53"
                href="/jiangmen"
                data-id="53"
              >江门</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=59"
                onclick="change_store_city(59,'jieyang')"
                data-pingyin="jieyang"
                id="pingyin_59"
                href="/jieyang"
                data-id="59"
              >揭阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=127"
                onclick="change_store_city(127,'jiaozuo')"
                data-pingyin="jiaozuo"
                id="pingyin_127"
                href="/jiaozuo"
                data-id="127"
              >焦作</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=128"
                onclick="change_store_city(128,'jiyuan')"
                data-pingyin="jiyuan"
                id="pingyin_128"
                href="/jiyuan"
                data-id="128"
              >济源</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=141"
                onclick="change_store_city(141,'jiamusi')"
                data-pingyin="jiamusi"
                id="pingyin_141"
                href="/jiamusi"
                data-id="141"
              >佳木斯</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=145"
                onclick="change_store_city(145,'jixi')"
                data-pingyin="jixi"
                id="pingyin_145"
                href="/jixi"
                data-id="145"
              >鸡西</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=158"
                onclick="change_store_city(158,'jingzhou')"
                data-pingyin="jingzhou"
                id="pingyin_158"
                href="/jingzhou"
                data-id="158"
              >荆州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=159"
                onclick="change_store_city(159,'jingmen')"
                data-pingyin="jingmen"
                id="pingyin_159"
                href="/jingmen"
                data-id="159"
              >荆门</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=254"
                onclick="change_store_city(254,'jinan')"
                data-pingyin="jinan"
                id="pingyin_254"
                href="/jinan"
                data-id="254"
              >济南</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=183"
                onclick="change_store_city(183,'jilin')"
                data-pingyin="jilin"
                id="pingyin_183"
                href="/jilin"
                data-id="183"
              >吉林</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=206"
                onclick="change_store_city(206,'jiujiang')"
                data-pingyin="jiujiang"
                id="pingyin_206"
                href="/jiujiang"
                data-id="206"
              >九江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=207"
                onclick="change_store_city(207,'jingdezhen')"
                data-pingyin="jingdezhen"
                id="pingyin_207"
                href="/jingdezhen"
                data-id="207"
              >景德镇</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=208"
                onclick="change_store_city(208,'jian')"
                data-pingyin="jian"
                id="pingyin_208"
                href="/jian"
                data-id="208"
              >吉安</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=220"
                onclick="change_store_city(220,'jinzhou')"
                data-pingyin="jinzhou"
                id="pingyin_220"
                href="/jinzhou"
                data-id="220"
              >锦州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=264"
                onclick="change_store_city(264,'jining')"
                data-pingyin="jining"
                id="pingyin_264"
                href="/jining"
                data-id="264"
              >济宁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=274"
                onclick="change_store_city(274,'jincheng')"
                data-pingyin="jincheng"
                id="pingyin_274"
                href="/jincheng"
                data-id="274"
              >晋城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=275"
                onclick="change_store_city(275,'jinzhong')"
                data-pingyin="jinzhong"
                id="pingyin_275"
                href="/jinzhong"
                data-id="275"
              >晋中</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=353"
                onclick="change_store_city(353,'jiaxing')"
                data-pingyin="jiaxing"
                id="pingyin_353"
                href="/jiaxing"
                data-id="353"
              >嘉兴</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=358"
                onclick="change_store_city(358,'jinhua')"
                data-pingyin="jinhua"
                id="pingyin_358"
                href="/jinhua"
                data-id="358"
              >金华</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="K">K</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=122"
                onclick="change_store_city(122,'kaifeng')"
                data-pingyin="kaifeng"
                id="pingyin_122"
                href="/kaifeng"
                data-id="122"
              >开封</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=331"
                onclick="change_store_city(331,'kashen')"
                data-pingyin="kashen"
                id="pingyin_331"
                href="/kashen"
                data-id="331"
              >喀什</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=332"
                onclick="change_store_city(332,'kelamayi')"
                data-pingyin="kelamayi"
                id="pingyin_332"
                href="/kelamayi"
                data-id="332"
              >克拉玛依</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=333"
                onclick="change_store_city(333,'kezile')"
                data-pingyin="kezile"
                id="pingyin_333"
                href="/kezile"
                data-id="333"
              >克孜勒</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=335"
                onclick="change_store_city(335,'kunming')"
                data-pingyin="kunming"
                id="pingyin_335"
                href="/kunming"
                data-id="335"
              >昆明</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="L">L</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=19"
                onclick="change_store_city(19,'luan')"
                data-pingyin="luan"
                id="pingyin_19"
                href="/luan"
                data-id="19"
              >六安</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=27"
                onclick="change_store_city(27,'longyan')"
                data-pingyin="longyan"
                id="pingyin_27"
                href="/longyan"
                data-id="27"
              >龙岩</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=33"
                onclick="change_store_city(33,'lanzhou')"
                data-pingyin="lanzhou"
                id="pingyin_33"
                href="/lanzhou"
                data-id="33"
              >兰州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=45"
                onclick="change_store_city(45,'linxia')"
                data-pingyin="linxia"
                id="pingyin_45"
                href="/linxia"
                data-id="45"
              >临夏</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=46"
                onclick="change_store_city(46,'longnan')"
                data-pingyin="longnan"
                id="pingyin_46"
                href="/longnan"
                data-id="46"
              >陇南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=72"
                onclick="change_store_city(72,'liuzhou')"
                data-pingyin="liuzhou"
                id="pingyin_72"
                href="/liuzhou"
                data-id="72"
              >柳州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=74"
                onclick="change_store_city(74,'laibin')"
                data-pingyin="laibin"
                id="pingyin_74"
                href="/laibin"
                data-id="74"
              >来宾</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=85"
                onclick="change_store_city(85,'liupanshui')"
                data-pingyin="liupanshui"
                id="pingyin_85"
                href="/liupanshui"
                data-id="85"
              >六盘水</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=99"
                onclick="change_store_city(99,'ledongxian')"
                data-pingyin="ledongxian"
                id="pingyin_99"
                href="/ledongxian"
                data-id="99"
              >乐东县</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=100"
                onclick="change_store_city(100,'lingaoxian')"
                data-pingyin="lingaoxian"
                id="pingyin_100"
                href="/lingaoxian"
                data-id="100"
              >临高县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=101"
                onclick="change_store_city(101,'lingshuixian')"
                data-pingyin="lingshuixian"
                id="pingyin_101"
                href="/lingshuixian"
                data-id="101"
              >陵水县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=117"
                onclick="change_store_city(117,'langfang')"
                data-pingyin="langfang"
                id="pingyin_117"
                href="/langfang"
                data-id="117"
              >廊坊</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=121"
                onclick="change_store_city(121,'luoyang')"
                data-pingyin="luoyang"
                id="pingyin_121"
                href="/luoyang"
                data-id="121"
              >洛阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=129"
                onclick="change_store_city(129,'luohe')"
                data-pingyin="luohe"
                id="pingyin_129"
                href="/luohe"
                data-id="129"
              >漯河</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=175"
                onclick="change_store_city(175,'loudi')"
                data-pingyin="loudi"
                id="pingyin_175"
                href="/loudi"
                data-id="175"
              >娄底</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=187"
                onclick="change_store_city(187,'liaoyuan')"
                data-pingyin="liaoyuan"
                id="pingyin_187"
                href="/liaoyuan"
                data-id="187"
              >辽源</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=194"
                onclick="change_store_city(194,'lianyungang')"
                data-pingyin="lianyungang"
                id="pingyin_194"
                href="/lianyungang"
                data-id="194"
              >连云港</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=226"
                onclick="change_store_city(226,'liaoyang')"
                data-pingyin="liaoyang"
                id="pingyin_226"
                href="/liaoyang"
                data-id="226"
              >辽阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=265"
                onclick="change_store_city(265,'liaocheng')"
                data-pingyin="liaocheng"
                id="pingyin_265"
                href="/liaocheng"
                data-id="265"
              >聊城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=266"
                onclick="change_store_city(266,'linyi')"
                data-pingyin="linyi"
                id="pingyin_266"
                href="/linyi"
                data-id="266"
              >临沂</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=267"
                onclick="change_store_city(267,'laiwu')"
                data-pingyin="laiwu"
                id="pingyin_267"
                href="/laiwu"
                data-id="267"
              >莱芜</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=276"
                onclick="change_store_city(276,'linfen')"
                data-pingyin="linfen"
                id="pingyin_276"
                href="/linfen"
                data-id="276"
              >临汾</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=277"
                onclick="change_store_city(277,'lvliang')"
                data-pingyin="lvliang"
                id="pingyin_277"
                href="/lvliang"
                data-id="277"
              >吕梁</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=300"
                onclick="change_store_city(300,'leshan')"
                data-pingyin="leshan"
                id="pingyin_300"
                href="/leshan"
                data-id="300"
              >乐山</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=301"
                onclick="change_store_city(301,'luzhou')"
                data-pingyin="luzhou"
                id="pingyin_301"
                href="/luzhou"
                data-id="301"
              >泸州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=312"
                onclick="change_store_city(312,'liangshan')"
                data-pingyin="liangshan"
                id="pingyin_312"
                href="/liangshan"
                data-id="312"
              >凉山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=313"
                onclick="change_store_city(313,'lasa')"
                data-pingyin="lasa"
                id="pingyin_313"
                href="/lasa"
                data-id="313"
              >拉萨</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=317"
                onclick="change_store_city(317,'linzhi')"
                data-pingyin="linzhi"
                id="pingyin_317"
                href="/linzhi"
                data-id="317"
              >林芝</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=346"
                onclick="change_store_city(346,'lijiang')"
                data-pingyin="lijiang"
                id="pingyin_346"
                href="/lijiang"
                data-id="346"
              >丽江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=347"
                onclick="change_store_city(347,'lincang')"
                data-pingyin="lincang"
                id="pingyin_347"
                href="/lincang"
                data-id="347"
              >临沧</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=359"
                onclick="change_store_city(359,'lishui')"
                data-pingyin="lishui"
                id="pingyin_359"
                href="/lishui"
                data-id="359"
              >丽水</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="M">M</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=20"
                onclick="change_store_city(20,'maanshan')"
                data-pingyin="maanshan"
                id="pingyin_20"
                href="/maanshan"
                data-id="20"
              >马鞍山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=60"
                onclick="change_store_city(60,'maoming')"
                data-pingyin="maoming"
                id="pingyin_60"
                href="/maoming"
                data-id="60"
              >茂名</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=61"
                onclick="change_store_city(61,'meizhou')"
                data-pingyin="meizhou"
                id="pingyin_61"
                href="/meizhou"
                data-id="61"
              >梅州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=146"
                onclick="change_store_city(146,'mudanjiang')"
                data-pingyin="mudanjiang"
                id="pingyin_146"
                href="/mudanjiang"
                data-id="146"
              >牡丹江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=293"
                onclick="change_store_city(293,'mianyang')"
                data-pingyin="mianyang"
                id="pingyin_293"
                href="/mianyang"
                data-id="293"
              >绵阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=302"
                onclick="change_store_city(302,'meishan')"
                data-pingyin="meishan"
                id="pingyin_302"
                href="/meishan"
                data-id="302"
              >眉山</a>
            </div>
          </div>
          <div class="title" id="N">N</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=28"
                onclick="change_store_city(28,'ningde')"
                data-pingyin="ningde"
                id="pingyin_28"
                href="/ningde"
                data-id="28"
              >宁德</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=29"
                onclick="change_store_city(29,'nanping')"
                data-pingyin="nanping"
                id="pingyin_29"
                href="/nanping"
                data-id="29"
              >南平</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=191"
                onclick="change_store_city(191,'nanjing')"
                data-pingyin="nanjing"
                id="pingyin_191"
                href="/nanjing"
                data-id="191"
              >南京</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=68"
                onclick="change_store_city(68,'nanning')"
                data-pingyin="nanning"
                id="pingyin_68"
                href="/nanning"
                data-id="68"
              >南宁</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=130"
                onclick="change_store_city(130,'nanyang')"
                data-pingyin="nanyang"
                id="pingyin_130"
                href="/nanyang"
                data-id="130"
              >南阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=201"
                onclick="change_store_city(201,'nantong')"
                data-pingyin="nantong"
                id="pingyin_201"
                href="/nantong"
                data-id="201"
              >南通</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=303"
                onclick="change_store_city(303,'neijiang')"
                data-pingyin="neijiang"
                id="pingyin_303"
                href="/neijiang"
                data-id="303"
              >内江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=304"
                onclick="change_store_city(304,'nanchong')"
                data-pingyin="nanchong"
                id="pingyin_304"
                href="/nanchong"
                data-id="304"
              >南充</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=318"
                onclick="change_store_city(318,'naqu')"
                data-pingyin="naqu"
                id="pingyin_318"
                href="/naqu"
                data-id="318"
              >那曲</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=348"
                onclick="change_store_city(348,'nujiang')"
                data-pingyin="nujiang"
                id="pingyin_348"
                href="/nujiang"
                data-id="348"
              >怒江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=204"
                onclick="change_store_city(204,'nanchang')"
                data-pingyin="nanchang"
                id="pingyin_204"
                href="/nanchang"
                data-id="204"
              >南昌</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=352"
                onclick="change_store_city(352,'ningbo')"
                data-pingyin="ningbo"
                id="pingyin_352"
                href="/ningbo"
                data-id="352"
              >宁波</a>
            </div>
          </div>
          <div class="title" id="P">P</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=30"
                onclick="change_store_city(30,'putian')"
                data-pingyin="putian"
                id="pingyin_30"
                href="/putian"
                data-id="30"
              >莆田</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=38"
                onclick="change_store_city(38,'pingliang')"
                data-pingyin="pingliang"
                id="pingyin_38"
                href="/pingliang"
                data-id="38"
              >平凉</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=125"
                onclick="change_store_city(125,'pingdingshan')"
                data-pingyin="pingdingshan"
                id="pingyin_125"
                href="/pingdingshan"
                data-id="125"
              >平顶山</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=131"
                onclick="change_store_city(131,'puyang')"
                data-pingyin="puyang"
                id="pingyin_131"
                href="/puyang"
                data-id="131"
              >濮阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=209"
                onclick="change_store_city(209,'pingxiang')"
                data-pingyin="pingxiang"
                id="pingyin_209"
                href="/pingxiang"
                data-id="209"
              >萍乡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=227"
                onclick="change_store_city(227,'panjin')"
                data-pingyin="panjin"
                id="pingyin_227"
                href="/panjin"
                data-id="227"
              >盘锦</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=305"
                onclick="change_store_city(305,'panzhihua')"
                data-pingyin="panzhihua"
                id="pingyin_305"
                href="/panzhihua"
                data-id="305"
              >攀枝花</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=349"
                onclick="change_store_city(349,'puer')"
                data-pingyin="puer"
                id="pingyin_349"
                href="/puer"
                data-id="349"
              >普洱</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="Q">Q</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=26"
                onclick="change_store_city(26,'quanzhou')"
                data-pingyin="quanzhou"
                id="pingyin_26"
                href="/quanzhou"
                data-id="26"
              >泉州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=39"
                onclick="change_store_city(39,'qingyang')"
                data-pingyin="qingyang"
                id="pingyin_39"
                href="/qingyang"
                data-id="39"
              >庆阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=62"
                onclick="change_store_city(62,'qingyuan')"
                data-pingyin="qingyuan"
                id="pingyin_62"
                href="/qingyuan"
                data-id="62"
              >清远</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=80"
                onclick="change_store_city(80,'qinzhou')"
                data-pingyin="qinzhou"
                id="pingyin_80"
                href="/qinzhou"
                data-id="80"
              >钦州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=87"
                onclick="change_store_city(87,'qiandongnan')"
                data-pingyin="qiandongnan"
                id="pingyin_87"
                href="/qiandongnan"
                data-id="87"
              >黔东南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=88"
                onclick="change_store_city(88,'qianxinan')"
                data-pingyin="qianxinan"
                id="pingyin_88"
                href="/qianxinan"
                data-id="88"
              >黔西南</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=89"
                onclick="change_store_city(89,'qiannan')"
                data-pingyin="qiannan"
                id="pingyin_89"
                href="/qiannan"
                data-id="89"
              >黔南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=102"
                onclick="change_store_city(102,'qionghai')"
                data-pingyin="qionghai"
                id="pingyin_102"
                href="/qionghai"
                data-id="102"
              >琼海</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=103"
                onclick="change_store_city(103,'qiongzhongxian')"
                data-pingyin="qiongzhongxian"
                id="pingyin_103"
                href="/qiongzhongxian"
                data-id="103"
              >琼中县</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=114"
                onclick="change_store_city(114,'qinhuangdao')"
                data-pingyin="qinhuangdao"
                id="pingyin_114"
                href="/qinhuangdao"
                data-id="114"
              >秦皇岛</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=140"
                onclick="change_store_city(140,'qiqihaer')"
                data-pingyin="qiqihaer"
                id="pingyin_140"
                href="/qiqihaer"
                data-id="140"
              >齐齐哈尔</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=147"
                onclick="change_store_city(147,'qitaihe')"
                data-pingyin="qitaihe"
                id="pingyin_147"
                href="/qitaihe"
                data-id="147"
              >七台河</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=163"
                onclick="change_store_city(163,'qianjiang')"
                data-pingyin="qianjiang"
                id="pingyin_163"
                href="/qianjiang"
                data-id="163"
              >潜江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=255"
                onclick="change_store_city(255,'qingdao')"
                data-pingyin="qingdao"
                id="pingyin_255"
                href="/qingdao"
                data-id="255"
              >青岛</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=340"
                onclick="change_store_city(340,'qujing')"
                data-pingyin="qujing"
                id="pingyin_340"
                href="/qujing"
                data-id="340"
              >曲靖</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=361"
                onclick="change_store_city(361,'quzhou')"
                data-pingyin="quzhou"
                id="pingyin_361"
                href="/quzhou"
                data-id="361"
              >衢州</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="R">R</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=268"
                onclick="change_store_city(268,'rizhao')"
                data-pingyin="rizhao"
                id="pingyin_268"
                href="/rizhao"
                data-id="268"
              >日照</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=314"
                onclick="change_store_city(314,'rikaze')"
                data-pingyin="rikaze"
                id="pingyin_314"
                href="/rikaze"
                data-id="314"
              >日喀则</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="S">S</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=4"
                onclick="change_store_city(4,'shanghai')"
                data-pingyin="shanghai"
                id="pingyin_4"
                href="/shanghai"
                data-id="4"
              >上海</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=48"
                onclick="change_store_city(48,'shenzhen')"
                data-pingyin="shenzhen"
                id="pingyin_48"
                href="/shenzhen"
                data-id="48"
              >深圳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=21"
                onclick="change_store_city(21,'suzhou1')"
                data-pingyin="suzhou1"
                id="pingyin_21"
                href="/suzhou1"
                data-id="21"
              >宿州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=31"
                onclick="change_store_city(31,'sanming')"
                data-pingyin="sanming"
                id="pingyin_31"
                href="/sanming"
                data-id="31"
              >三明</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=55"
                onclick="change_store_city(55,'shantou')"
                data-pingyin="shantou"
                id="pingyin_55"
                href="/shantou"
                data-id="55"
              >汕头</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=63"
                onclick="change_store_city(63,'shaoguan')"
                data-pingyin="shaoguan"
                id="pingyin_63"
                href="/shaoguan"
                data-id="63"
              >韶关</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=64"
                onclick="change_store_city(64,'shanwei')"
                data-pingyin="shanwei"
                id="pingyin_64"
                href="/shanwei"
                data-id="64"
              >汕尾</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=92"
                onclick="change_store_city(92,'sanya')"
                data-pingyin="sanya"
                id="pingyin_92"
                href="/sanya"
                data-id="92"
              >三亚</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=109"
                onclick="change_store_city(109,'shijiazhuang')"
                data-pingyin="shijiazhuang"
                id="pingyin_109"
                href="/shijiazhuang"
                data-id="109"
              >石家庄</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=132"
                onclick="change_store_city(132,'sanmenxia')"
                data-pingyin="sanmenxia"
                id="pingyin_132"
                href="/sanmenxia"
                data-id="132"
              >三门峡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=133"
                onclick="change_store_city(133,'shangqiu')"
                data-pingyin="shangqiu"
                id="pingyin_133"
                href="/shangqiu"
                data-id="133"
              >商丘</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=148"
                onclick="change_store_city(148,'suihua')"
                data-pingyin="suihua"
                id="pingyin_148"
                href="/suihua"
                data-id="148"
              >绥化</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=149"
                onclick="change_store_city(149,'shuangyashan')"
                data-pingyin="shuangyashan"
                id="pingyin_149"
                href="/shuangyashan"
                data-id="149"
              >双鸭山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=153"
                onclick="change_store_city(153,'shiyan')"
                data-pingyin="shiyan"
                id="pingyin_153"
                href="/shiyan"
                data-id="153"
              >十堰</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=160"
                onclick="change_store_city(160,'suizhou')"
                data-pingyin="suizhou"
                id="pingyin_160"
                href="/suizhou"
                data-id="160"
              >随州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=167"
                onclick="change_store_city(167,'shennongjia')"
                data-pingyin="shennongjia"
                id="pingyin_167"
                href="/shennongjia"
                data-id="167"
              >神农架</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=176"
                onclick="change_store_city(176,'shaoyang')"
                data-pingyin="shaoyang"
                id="pingyin_176"
                href="/shaoyang"
                data-id="176"
              >邵阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=188"
                onclick="change_store_city(188,'siping')"
                data-pingyin="siping"
                id="pingyin_188"
                href="/siping"
                data-id="188"
              >四平</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=189"
                onclick="change_store_city(189,'songyuan')"
                data-pingyin="songyuan"
                id="pingyin_189"
                href="/songyuan"
                data-id="189"
              >松原</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=192"
                onclick="change_store_city(192,'suzhou')"
                data-pingyin="suzhou"
                id="pingyin_192"
                href="/suzhou"
                data-id="192"
              >苏州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=202"
                onclick="change_store_city(202,'suqian')"
                data-pingyin="suqian"
                id="pingyin_202"
                href="/suqian"
                data-id="202"
              >宿迁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=210"
                onclick="change_store_city(210,'shangrao')"
                data-pingyin="shangrao"
                id="pingyin_210"
                href="/shangrao"
                data-id="210"
              >上饶</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=215"
                onclick="change_store_city(215,'shenyang')"
                data-pingyin="shenyang"
                id="pingyin_215"
                href="/shenyang"
                data-id="215"
              >沈阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=242"
                onclick="change_store_city(242,'shizuishan')"
                data-pingyin="shizuishan"
                id="pingyin_242"
                href="/shizuishan"
                data-id="242"
              >石嘴山</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=278"
                onclick="change_store_city(278,'shuozhou')"
                data-pingyin="shuozhou"
                id="pingyin_278"
                href="/shuozhou"
                data-id="278"
              >朔州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=286"
                onclick="change_store_city(286,'shangluo')"
                data-pingyin="shangluo"
                id="pingyin_286"
                href="/shangluo"
                data-id="286"
              >商洛</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=306"
                onclick="change_store_city(306,'suining')"
                data-pingyin="suining"
                id="pingyin_306"
                href="/suining"
                data-id="306"
              >遂宁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=319"
                onclick="change_store_city(319,'shannan')"
                data-pingyin="shannan"
                id="pingyin_319"
                href="/shannan"
                data-id="319"
              >山南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=321"
                onclick="change_store_city(321,'shihezi')"
                data-pingyin="shihezi"
                id="pingyin_321"
                href="/shihezi"
                data-id="321"
              >石河子</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=354"
                onclick="change_store_city(354,'shaoxing')"
                data-pingyin="shaoxing"
                id="pingyin_354"
                href="/shaoxing"
                data-id="354"
              >绍兴</a>
            </div>
          </div>
          <div class="title" id="T">T</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=5"
                onclick="change_store_city(5,'tianjin')"
                data-pingyin="tianjin"
                id="pingyin_5"
                href="/tianjin"
                data-id="5"
              >天津</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=22"
                onclick="change_store_city(22,'tongling')"
                data-pingyin="tongling"
                id="pingyin_22"
                href="/tongling"
                data-id="22"
              >铜陵</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=41"
                onclick="change_store_city(41,'tianshui')"
                data-pingyin="tianshui"
                id="pingyin_41"
                href="/tianshui"
                data-id="41"
              >天水</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=90"
                onclick="change_store_city(90,'tongren')"
                data-pingyin="tongren"
                id="pingyin_90"
                href="/tongren"
                data-id="90"
              >铜仁</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=104"
                onclick="change_store_city(104,'tunchangxian')"
                data-pingyin="tunchangxian"
                id="pingyin_104"
                href="/tunchangxian"
                data-id="104"
              >屯昌县</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=113"
                onclick="change_store_city(113,'tangshan')"
                data-pingyin="tangshan"
                id="pingyin_113"
                href="/tangshan"
                data-id="113"
              >唐山</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=162"
                onclick="change_store_city(162,'tianmen')"
                data-pingyin="tianmen"
                id="pingyin_162"
                href="/tianmen"
                data-id="162"
              >天门</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=190"
                onclick="change_store_city(190,'tonghua')"
                data-pingyin="tonghua"
                id="pingyin_190"
                href="/tonghua"
                data-id="190"
              >通化</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=195"
                onclick="change_store_city(195,'taizhou')"
                data-pingyin="taizhou"
                id="pingyin_195"
                href="/taizhou"
                data-id="195"
              >泰州</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=228"
                onclick="change_store_city(228,'tieling')"
                data-pingyin="tieling"
                id="pingyin_228"
                href="/tieling"
                data-id="228"
              >铁岭</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=237"
                onclick="change_store_city(237,'tongliao')"
                data-pingyin="tongliao"
                id="pingyin_237"
                href="/tongliao"
                data-id="237"
              >通辽</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=259"
                onclick="change_store_city(259,'taian')"
                data-pingyin="taian"
                id="pingyin_259"
                href="/taian"
                data-id="259"
              >泰安</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=271"
                onclick="change_store_city(271,'taiyuan')"
                data-pingyin="taiyuan"
                id="pingyin_271"
                href="/taiyuan"
                data-id="271"
              >太原</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=287"
                onclick="change_store_city(287,'tongchuan')"
                data-pingyin="tongchuan"
                id="pingyin_287"
                href="/tongchuan"
                data-id="287"
              >铜川</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=322"
                onclick="change_store_city(322,'tulufan')"
                data-pingyin="tulufan"
                id="pingyin_322"
                href="/tulufan"
                data-id="322"
              >吐鲁番</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=334"
                onclick="change_store_city(334,'tacheng')"
                data-pingyin="tacheng"
                id="pingyin_334"
                href="/tacheng"
                data-id="334"
              >塔城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=360"
                onclick="change_store_city(360,'taizhou1')"
                data-pingyin="taizhou1"
                id="pingyin_360"
                href="/taizhou1"
                data-id="360"
              >台州</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="W">W</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=8"
                onclick="change_store_city(8,'wuhu')"
                data-pingyin="wuhu"
                id="pingyin_8"
                href="/wuhu"
                data-id="8"
              >芜湖</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=151"
                onclick="change_store_city(151,'wuhan')"
                data-pingyin="wuhan"
                id="pingyin_151"
                href="/wuhan"
                data-id="151"
              >武汉</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=40"
                onclick="change_store_city(40,'wuwei')"
                data-pingyin="wuwei"
                id="pingyin_40"
                href="/wuwei"
                data-id="40"
              >武威</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=75"
                onclick="change_store_city(75,'wuzhou')"
                data-pingyin="wuzhou"
                id="pingyin_75"
                href="/wuzhou"
                data-id="75"
              >梧州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=105"
                onclick="change_store_city(105,'wanning')"
                data-pingyin="wanning"
                id="pingyin_105"
                href="/wanning"
                data-id="105"
              >万宁</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=106"
                onclick="change_store_city(106,'wenchang')"
                data-pingyin="wenchang"
                id="pingyin_106"
                href="/wenchang"
                data-id="106"
              >文昌</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=107"
                onclick="change_store_city(107,'wuzhishan')"
                data-pingyin="wuzhishan"
                id="pingyin_107"
                href="/wuzhishan"
                data-id="107"
              >五指山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=196"
                onclick="change_store_city(196,'wuxi')"
                data-pingyin="wuxi"
                id="pingyin_196"
                href="/wuxi"
                data-id="196"
              >无锡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=233"
                onclick="change_store_city(233,'wulanchabu')"
                data-pingyin="wulanchabu"
                id="pingyin_233"
                href="/wulanchabu"
                data-id="233"
              >乌兰察布</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=234"
                onclick="change_store_city(234,'wuhai')"
                data-pingyin="wuhai"
                id="pingyin_234"
                href="/wuhai"
                data-id="234"
              >乌海</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=244"
                onclick="change_store_city(244,'wuzhong')"
                data-pingyin="wuzhong"
                id="pingyin_244"
                href="/wuzhong"
                data-id="244"
              >吴忠</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=256"
                onclick="change_store_city(256,'weihai')"
                data-pingyin="weihai"
                id="pingyin_256"
                href="/weihai"
                data-id="256"
              >威海</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=258"
                onclick="change_store_city(258,'weifang')"
                data-pingyin="weifang"
                id="pingyin_258"
                href="/weifang"
                data-id="258"
              >潍坊</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=288"
                onclick="change_store_city(288,'weinan')"
                data-pingyin="weinan"
                id="pingyin_288"
                href="/weinan"
                data-id="288"
              >渭南</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=320"
                onclick="change_store_city(320,'wulumuqi')"
                data-pingyin="wulumuqi"
                id="pingyin_320"
                href="/wulumuqi"
                data-id="320"
              >乌鲁木齐</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=350"
                onclick="change_store_city(350,'wenshan')"
                data-pingyin="wenshan"
                id="pingyin_350"
                href="/wenshan"
                data-id="350"
              >文山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=355"
                onclick="change_store_city(355,'wenzhou')"
                data-pingyin="wenzhou"
                id="pingyin_355"
                href="/wenzhou"
                data-id="355"
              >温州</a>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="X">X</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=23"
                onclick="change_store_city(23,'xuancheng')"
                data-pingyin="xuancheng"
                id="pingyin_23"
                href="/xuancheng"
                data-id="23"
              >宣城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=25"
                onclick="change_store_city(25,'xiamen')"
                data-pingyin="xiamen"
                id="pingyin_25"
                href="/xiamen"
                data-id="25"
              >厦门</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=118"
                onclick="change_store_city(118,'xingtai')"
                data-pingyin="xingtai"
                id="pingyin_118"
                href="/xingtai"
                data-id="118"
              >邢台</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=123"
                onclick="change_store_city(123,'xuchang')"
                data-pingyin="xuchang"
                id="pingyin_123"
                href="/xuchang"
                data-id="123"
              >许昌</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=134"
                onclick="change_store_city(134,'xinxiang')"
                data-pingyin="xinxiang"
                id="pingyin_134"
                href="/xinxiang"
                data-id="134"
              >新乡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=135"
                onclick="change_store_city(135,'xinyang')"
                data-pingyin="xinyang"
                id="pingyin_135"
                href="/xinyang"
                data-id="135"
              >信阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=152"
                onclick="change_store_city(152,'xiangyang')"
                data-pingyin="xiangyang"
                id="pingyin_152"
                href="/xiangyang"
                data-id="152"
              >襄阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=164"
                onclick="change_store_city(164,'xiantao')"
                data-pingyin="xiantao"
                id="pingyin_164"
                href="/xiantao"
                data-id="164"
              >仙桃</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=165"
                onclick="change_store_city(165,'xiaogan')"
                data-pingyin="xiaogan"
                id="pingyin_165"
                href="/xiaogan"
                data-id="165"
              >孝感</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=166"
                onclick="change_store_city(166,'xianning')"
                data-pingyin="xianning"
                id="pingyin_166"
                href="/xianning"
                data-id="166"
              >咸宁</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=170"
                onclick="change_store_city(170,'xiangtan')"
                data-pingyin="xiangtan"
                id="pingyin_170"
                href="/xiangtan"
                data-id="170"
              >湘潭</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=181"
                onclick="change_store_city(181,'xiangxi')"
                data-pingyin="xiangxi"
                id="pingyin_181"
                href="/xiangxi"
                data-id="181"
              >湘西</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=282"
                onclick="change_store_city(282,'xian')"
                data-pingyin="xian"
                id="pingyin_282"
                href="/xian"
                data-id="282"
              >西安</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=197"
                onclick="change_store_city(197,'xuzhou')"
                data-pingyin="xuzhou"
                id="pingyin_197"
                href="/xuzhou"
                data-id="197"
              >徐州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=211"
                onclick="change_store_city(211,'xinyu')"
                data-pingyin="xinyu"
                id="pingyin_211"
                href="/xinyu"
                data-id="211"
              >新余</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=235"
                onclick="change_store_city(235,'xinganmeng')"
                data-pingyin="xinganmeng"
                id="pingyin_235"
                href="/xinganmeng"
                data-id="235"
              >兴安盟</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=240"
                onclick="change_store_city(240,'xilinguole')"
                data-pingyin="xilinguole"
                id="pingyin_240"
                href="/xilinguole"
                data-id="240"
              >锡林郭勒</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=246"
                onclick="change_store_city(246,'xining')"
                data-pingyin="xining"
                id="pingyin_246"
                href="/xining"
                data-id="246"
              >西宁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=279"
                onclick="change_store_city(279,'xinzhou')"
                data-pingyin="xinzhou"
                id="pingyin_279"
                href="/xinzhou"
                data-id="279"
              >忻州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=289"
                onclick="change_store_city(289,'xianyang')"
                data-pingyin="xianyang"
                id="pingyin_289"
                href="/xianyang"
                data-id="289"
              >咸阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=341"
                onclick="change_store_city(341,'xishuangbanna')"
                data-pingyin="xishuangbanna"
                id="pingyin_341"
                href="/xishuangbanna"
                data-id="341"
              >西双版纳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=362"
                onclick="change_store_city(362,'xianggang')"
                data-pingyin="xianggang"
                id="pingyin_362"
                href="/xianggang"
                data-id="362"
              >香港</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="Y">Y</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=65"
                onclick="change_store_city(65,'yangjiang')"
                data-pingyin="yangjiang"
                id="pingyin_65"
                href="/yangjiang"
                data-id="65"
              >阳江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=66"
                onclick="change_store_city(66,'yunfu')"
                data-pingyin="yunfu"
                id="pingyin_66"
                href="/yunfu"
                data-id="66"
              >云浮</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=77"
                onclick="change_store_city(77,'yulin')"
                data-pingyin="yulin"
                id="pingyin_77"
                href="/yulin"
                data-id="77"
              >玉林</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=150"
                onclick="change_store_city(150,'yichun')"
                data-pingyin="yichun"
                id="pingyin_150"
                href="/yichun"
                data-id="150"
              >伊春</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=161"
                onclick="change_store_city(161,'yichang')"
                data-pingyin="yichang"
                id="pingyin_161"
                href="/yichang"
                data-id="161"
              >宜昌</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=169"
                onclick="change_store_city(169,'yueyang')"
                data-pingyin="yueyang"
                id="pingyin_169"
                href="/yueyang"
                data-id="169"
              >岳阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=177"
                onclick="change_store_city(177,'yiyang')"
                data-pingyin="yiyang"
                id="pingyin_177"
                href="/yiyang"
                data-id="177"
              >益阳</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=178"
                onclick="change_store_city(178,'yongzhou')"
                data-pingyin="yongzhou"
                id="pingyin_178"
                href="/yongzhou"
                data-id="178"
              >永州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=184"
                onclick="change_store_city(184,'yanbian')"
                data-pingyin="yanbian"
                id="pingyin_184"
                href="/yanbian"
                data-id="184"
              >延边</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=198"
                onclick="change_store_city(198,'yangzhou')"
                data-pingyin="yangzhou"
                id="pingyin_198"
                href="/yangzhou"
                data-id="198"
              >扬州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=203"
                onclick="change_store_city(203,'yancheng')"
                data-pingyin="yancheng"
                id="pingyin_203"
                href="/yancheng"
                data-id="203"
              >盐城</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=212"
                onclick="change_store_city(212,'yichun1')"
                data-pingyin="yichun1"
                id="pingyin_212"
                href="/yichun1"
                data-id="212"
              >宜春</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=213"
                onclick="change_store_city(213,'yingtan')"
                data-pingyin="yingtan"
                id="pingyin_213"
                href="/yingtan"
                data-id="213"
              >鹰潭</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=221"
                onclick="change_store_city(221,'yingkou')"
                data-pingyin="yingkou"
                id="pingyin_221"
                href="/yingkou"
                data-id="221"
              >营口</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=241"
                onclick="change_store_city(241,'yinchuan')"
                data-pingyin="yinchuan"
                id="pingyin_241"
                href="/yinchuan"
                data-id="241"
              >银川</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=248"
                onclick="change_store_city(248,'yushu')"
                data-pingyin="yushu"
                id="pingyin_248"
                href="/yushu"
                data-id="248"
              >玉树</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=257"
                onclick="change_store_city(257,'yantai')"
                data-pingyin="yantai"
                id="pingyin_257"
                href="/yantai"
                data-id="257"
              >烟台</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=280"
                onclick="change_store_city(280,'yuncheng')"
                data-pingyin="yuncheng"
                id="pingyin_280"
                href="/yuncheng"
                data-id="280"
              >运城</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=281"
                onclick="change_store_city(281,'yangquan')"
                data-pingyin="yangquan"
                id="pingyin_281"
                href="/yangquan"
                data-id="281"
              >阳泉</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=290"
                onclick="change_store_city(290,'yanan')"
                data-pingyin="yanan"
                id="pingyin_290"
                href="/yanan"
                data-id="290"
              >延安</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=291"
                onclick="change_store_city(291,'yulin1')"
                data-pingyin="yulin1"
                id="pingyin_291"
                href="/yulin1"
                data-id="291"
              >榆林</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=307"
                onclick="change_store_city(307,'yibin')"
                data-pingyin="yibin"
                id="pingyin_307"
                href="/yibin"
                data-id="307"
              >宜宾</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=308"
                onclick="change_store_city(308,'yaan')"
                data-pingyin="yaan"
                id="pingyin_308"
                href="/yaan"
                data-id="308"
              >雅安</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=323"
                onclick="change_store_city(323,'yili')"
                data-pingyin="yili"
                id="pingyin_323"
                href="/yili"
                data-id="323"
              >伊犁</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=336"
                onclick="change_store_city(336,'yuxi')"
                data-pingyin="yuxi"
                id="pingyin_336"
                href="/yuxi"
                data-id="336"
              >玉溪</a>
              <div class="item vsh"></div>
              <div class="item vsh"></div>
            </div>
          </div>
          <div class="title" id="Z">Z</div>
          <div class="city_wrap bgwhite">
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=32"
                onclick="change_store_city(32,'zhangzhou')"
                data-pingyin="zhangzhou"
                id="pingyin_32"
                href="/zhangzhou"
                data-id="32"
              >漳州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=42"
                onclick="change_store_city(42,'zhangye')"
                data-pingyin="zhangye"
                id="pingyin_42"
                href="/zhangye"
                data-id="42"
              >张掖</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=49"
                onclick="change_store_city(49,'zhuhai')"
                data-pingyin="zhuhai"
                id="pingyin_49"
                href="/zhuhai"
                data-id="49"
              >珠海</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=54"
                onclick="change_store_city(54,'zhongshan')"
                data-pingyin="zhongshan"
                id="pingyin_54"
                href="/zhongshan"
                data-id="54"
              >中山</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=56"
                onclick="change_store_city(56,'zhanjiang')"
                data-pingyin="zhanjiang"
                id="pingyin_56"
                href="/zhanjiang"
                data-id="56"
              >湛江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=67"
                onclick="change_store_city(67,'zhaoqing')"
                data-pingyin="zhaoqing"
                id="pingyin_67"
                href="/zhaoqing"
                data-id="67"
              >肇庆</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=84"
                onclick="change_store_city(84,'zunyi')"
                data-pingyin="zunyi"
                id="pingyin_84"
                href="/zunyi"
                data-id="84"
              >遵义</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=119"
                onclick="change_store_city(119,'zhangjiakou')"
                data-pingyin="zhangjiakou"
                id="pingyin_119"
                href="/zhangjiakou"
                data-id="119"
              >张家口</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=136"
                onclick="change_store_city(136,'zhumadian')"
                data-pingyin="zhumadian"
                id="pingyin_136"
                href="/zhumadian"
                data-id="136"
              >驻马店</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=137"
                onclick="change_store_city(137,'zhoukou')"
                data-pingyin="zhoukou"
                id="pingyin_137"
                href="/zhoukou"
                data-id="137"
              >周口</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=120"
                onclick="change_store_city(120,'zhengzhou')"
                data-pingyin="zhengzhou"
                id="pingyin_120"
                href="/zhengzhou"
                data-id="120"
              >郑州</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=179"
                onclick="change_store_city(179,'zhuzhou')"
                data-pingyin="zhuzhou"
                id="pingyin_179"
                href="/zhuzhou"
                data-id="179"
              >株洲</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=180"
                onclick="change_store_city(180,'zhangjiajie')"
                data-pingyin="zhangjiajie"
                id="pingyin_180"
                href="/zhangjiajie"
                data-id="180"
              >张家界</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=199"
                onclick="change_store_city(199,'zhenjiang')"
                data-pingyin="zhenjiang"
                id="pingyin_199"
                href="/zhenjiang"
                data-id="199"
              >镇江</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=245"
                onclick="change_store_city(245,'zhongwei')"
                data-pingyin="zhongwei"
                id="pingyin_245"
                href="/zhongwei"
                data-id="245"
              >中卫</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=269"
                onclick="change_store_city(269,'zibo')"
                data-pingyin="zibo"
                id="pingyin_269"
                href="/zibo"
                data-id="269"
              >淄博</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=270"
                onclick="change_store_city(270,'zaozhuang')"
                data-pingyin="zaozhuang"
                id="pingyin_270"
                href="/zaozhuang"
                data-id="270"
              >枣庄</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=294"
                onclick="change_store_city(294,'ziyang')"
                data-pingyin="ziyang"
                id="pingyin_294"
                href="/ziyang"
                data-id="294"
              >资阳</a>
            </div>
            <div class="flex_wrap">
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=309"
                onclick="change_store_city(309,'zigong')"
                data-pingyin="zigong"
                id="pingyin_309"
                href="/zigong"
                data-id="309"
              >自贡</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=342"
                onclick="change_store_city(342,'zhaotong')"
                data-pingyin="zhaotong"
                id="pingyin_342"
                href="/zhaotong"
                data-id="342"
              >昭通</a>
              <a
                class="item js_item"
                data-external="actioncode=city&amp;city_id=356"
                onclick="change_store_city(356,'zhoushan')"
                data-pingyin="zhoushan"
                id="pingyin_356"
                href="/zhoushan"
                data-id="356"
              >舟山</a>
            </div>
          </div>
        </div>
        <div class="global_search_wrap"></div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    data() {
      return {};
    }
  };
</script> -->
<style>
  .header {
    border-bottom: 1px solid red;
  }
  .returnBack {
    height: 1.3rem;
    width: 2rem;
    line-height: 1.3rem;
    vertical-align: middle;
    /* background: url(../../../static/images/goback.png) no-repeat;
        background-size: 0.28rem 0.48rem; */
    background-position: center center;
    padding-left: 0px;
    position: absolute;
    left: 4px;
    top: 0;
  }
  .new_m_header .header h3 {
    height: 100%;
    line-height: 1.3rem;
    vertical-align: middle;
    color: #333333;
    overflow: visible;
    max-width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    margin-left: 3.5rem;
    margin-right: auto;
    font-size: 18px;
  }

  .js-container {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
  }

  .bgwhite {
    background: #ffffff;
  }

  .vsh {
    visibility: hidden !important;
  }

  .page_city_lists {
    width: 100%;
    height: 100%;
    font-size: 14px;
    background: #f0f0f0;
  }

  .page_city_lists .padding_wrap {
    padding-top: -0.3rem;
  }

  .page_city_lists .city_search_wrap {
    width: 100%;
    padding-left: 0.666667rem;
    position: relative;
  }

  .page_city_lists .city_search_wrap input {
    width: 80%;
    display: block;
    border: none;
    height: 18px;
    color: #333333;
  }

  .page_city_lists .city_search_wrap .icon_close {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0.333333rem;
    top: -11px;
  }

  .page_city_lists .city_search_wrap .icon_close > div {
    width: 18px;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -1px;
    margin-left: -9px;
    background: #e6e6e6;
  }

  .page_city_lists .city_search_wrap .icon_close > div.r_l {
    transform: rotate(45deg);
    transform-origin: center center;
  }

  .page_city_lists .city_search_wrap .icon_close > div.r_r {
    transform: rotate(-45deg);
    transform-origin: center center;
  }

  .page_city_lists .search_wrap {
    padding-top: 0.266667rem;
    padding-bottom: 0.266667rem;
    padding-left: 0.666667rem;
    padding-right: 0.666667rem;
    color: #999999;
  }

  .page_city_lists .search_wrap .wrap {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    width: 100%;
    border-radius: 24px;
    text-align: center;
    background: #ffffff;
  }

  .page_city_lists .search_wrap .wrap > div {
    height: 11px;
  }

  .page_city_lists .search_wrap .wrap span {
    height: 18px;
    line-height: 18px;
    display: inline-block;
    vertical-align: top;
  }

  .page_city_lists .search_wrap .icon_search {
    width: 0.7rem;
    height: 0.5rem;
    /* background: url(../../../static/images/search.png) no-repeat;
        background-size: 100% 100%; */
    margin-left: 0rem;
    margin-top: -0.2rem;
    display: inline-block;
  }

  .page_city_lists .gps_wrap {
    padding: 0.4rem;
    color: #333333;
    background: #ffffff;
  }

  .page_city_lists .gps_wrap span {
    color: #999999;
  }

  .page_city_lists .title {
    padding-left: 0.266667rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-weight: bold;
    font-size: 12px;
    background: #f0f0f0;
  }

  .page_city_lists .flex_wrap {
    display: box;
    display: flex;
    border-top: 1px solid #ededed;
  }

  .page_city_lists .flex_wrap:last-child {
    border-bottom: 1px solid #ededed;
  }

  .page_city_lists .flex_wrap .item {
    box-flex: 1;
    flex: 1;
    color: #333333;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    text-align: center;
    border-right: 1px solid #ededed;
  }

  .page_city_lists .flex_wrap .item:last-child {
    border-right: none;
  }

  .page_city_lists .flex_wrap .item:hover {
    text-decoration: none;
  }

  .page_city_lists .flex_wrap .item:link {
    text-decoration: none;
  }

  .page_city_lists .flex_wrap .item:active {
    text-decoration: none;
  }

  .page_city_lists .flex_wrap .item:visited {
    text-decoration: none;
  }

  .global_search_wrap {
    font-size: 14px;
  }

  .global_search_wrap .search_wrap {
    padding: 0.333333rem;
    background: #dfdfdf;
    width: 100%;
  }

  .global_search_wrap .search_wrap input {
    width: 100%;
    height: 1rem;
    position: relative;
    padding-left: 0.266667rem;
    border: 0;
  }

  .global_search_wrap .close_btn_wrap {
    width: 1.06667rem;
    height: 100%;
    right: 0.333333rem;
    top: 0;
    position: absolute;
  }

  .global_search_wrap .close_btn_wrap > div {
    position: absolute;
    width: 0.586667rem;
    height: 0.586667rem;
    left: 50%;
    top: 50%;
    margin-left: -0.293333rem;
    margin-top: -0.293333rem;
    /* background: url(../../../static/images/goback.png) no-repeat; */
    /* background-size: 100% 100%; */
  }

  .global_search_wrap .title {
    height: 0.933333rem;
    line-height: 0.933333rem;
    vertical-align: middle;
    padding-left: 24px;
  }

  .global_search_wrap .item {
    padding-left: 0.64rem;
    height: 1rem;
    line-height: 1rem;
    vertical-align: middle;
    background: #ffffff;
    color: #333333;
    border-bottom: 1px solid #eaeaea;
  }

  .global_search_wrap .item:last-child {
    border-bottom: none;
  }
</style>