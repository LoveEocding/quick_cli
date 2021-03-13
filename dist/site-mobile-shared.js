import Vue from 'vue';
import PackageEntry from './package-entry';
import './package-style';

import ActionSheet from 'C:/脚手架项目/quick_vue/src/action-sheet/demo/index.vue';
import AddressEdit from 'C:/脚手架项目/quick_vue/src/address-edit/demo/index.vue';
import AddressList from 'C:/脚手架项目/quick_vue/src/address-list/demo/index.vue';
import Area from 'C:/脚手架项目/quick_vue/src/area/demo/index.vue';
import Badge from 'C:/脚手架项目/quick_vue/src/badge/demo/index.vue';
import Button from 'C:/脚手架项目/quick_vue/src/button/demo/index.vue';
import Calendar from 'C:/脚手架项目/quick_vue/src/calendar/demo/index.vue';
import Card from 'C:/脚手架项目/quick_vue/src/card/demo/index.vue';
import Cascader from 'C:/脚手架项目/quick_vue/src/cascader/demo/index.vue';
import Cell from 'C:/脚手架项目/quick_vue/src/cell/demo/index.vue';
import Checkbox from 'C:/脚手架项目/quick_vue/src/checkbox/demo/index.vue';
import Circle from 'C:/脚手架项目/quick_vue/src/circle/demo/index.vue';
import Col from 'C:/脚手架项目/quick_vue/src/col/demo/index.vue';
import Collapse from 'C:/脚手架项目/quick_vue/src/collapse/demo/index.vue';
import ContactCard from 'C:/脚手架项目/quick_vue/src/contact-card/demo/index.vue';
import ContactEdit from 'C:/脚手架项目/quick_vue/src/contact-edit/demo/index.vue';
import ContactList from 'C:/脚手架项目/quick_vue/src/contact-list/demo/index.vue';
import CountDown from 'C:/脚手架项目/quick_vue/src/count-down/demo/index.vue';
import CouponList from 'C:/脚手架项目/quick_vue/src/coupon-list/demo/index.vue';
import DatetimePicker from 'C:/脚手架项目/quick_vue/src/datetime-picker/demo/index.vue';
import Dialog from 'C:/脚手架项目/quick_vue/src/dialog/demo/index.vue';
import Divider from 'C:/脚手架项目/quick_vue/src/divider/demo/index.vue';
import DropdownMenu from 'C:/脚手架项目/quick_vue/src/dropdown-menu/demo/index.vue';
import Empty from 'C:/脚手架项目/quick_vue/src/empty/demo/index.vue';
import Field from 'C:/脚手架项目/quick_vue/src/field/demo/index.vue';
import Form from 'C:/脚手架项目/quick_vue/src/form/demo/index.vue';
import GoodsAction from 'C:/脚手架项目/quick_vue/src/goods-action/demo/index.vue';
import Grid from 'C:/脚手架项目/quick_vue/src/grid/demo/index.vue';
import Icon from 'C:/脚手架项目/quick_vue/src/icon/demo/index.vue';
import Image from 'C:/脚手架项目/quick_vue/src/image/demo/index.vue';
import ImagePreview from 'C:/脚手架项目/quick_vue/src/image-preview/demo/index.vue';
import IndexBar from 'C:/脚手架项目/quick_vue/src/index-bar/demo/index.vue';
import Lazyload from 'C:/脚手架项目/quick_vue/src/lazyload/demo/index.vue';
import List from 'C:/脚手架项目/quick_vue/src/list/demo/index.vue';
import Loading from 'C:/脚手架项目/quick_vue/src/loading/demo/index.vue';
import NavBar from 'C:/脚手架项目/quick_vue/src/nav-bar/demo/index.vue';
import NoticeBar from 'C:/脚手架项目/quick_vue/src/notice-bar/demo/index.vue';
import Notify from 'C:/脚手架项目/quick_vue/src/notify/demo/index.vue';
import NumberKeyboard from 'C:/脚手架项目/quick_vue/src/number-keyboard/demo/index.vue';
import Overlay from 'C:/脚手架项目/quick_vue/src/overlay/demo/index.vue';
import Pagination from 'C:/脚手架项目/quick_vue/src/pagination/demo/index.vue';
import Panel from 'C:/脚手架项目/quick_vue/src/panel/demo/index.vue';
import PasswordInput from 'C:/脚手架项目/quick_vue/src/password-input/demo/index.vue';
import Picker from 'C:/脚手架项目/quick_vue/src/picker/demo/index.vue';
import Popover from 'C:/脚手架项目/quick_vue/src/popover/demo/index.vue';
import Popup from 'C:/脚手架项目/quick_vue/src/popup/demo/index.vue';
import Progress from 'C:/脚手架项目/quick_vue/src/progress/demo/index.vue';
import PullRefresh from 'C:/脚手架项目/quick_vue/src/pull-refresh/demo/index.vue';
import Radio from 'C:/脚手架项目/quick_vue/src/radio/demo/index.vue';
import Rate from 'C:/脚手架项目/quick_vue/src/rate/demo/index.vue';
import Search from 'C:/脚手架项目/quick_vue/src/search/demo/index.vue';
import ShareSheet from 'C:/脚手架项目/quick_vue/src/share-sheet/demo/index.vue';
import Sidebar from 'C:/脚手架项目/quick_vue/src/sidebar/demo/index.vue';
import Skeleton from 'C:/脚手架项目/quick_vue/src/skeleton/demo/index.vue';
import Sku from 'C:/脚手架项目/quick_vue/src/sku/demo/index.vue';
import Slider from 'C:/脚手架项目/quick_vue/src/slider/demo/index.vue';
import Stepper from 'C:/脚手架项目/quick_vue/src/stepper/demo/index.vue';
import Steps from 'C:/脚手架项目/quick_vue/src/steps/demo/index.vue';
import Sticky from 'C:/脚手架项目/quick_vue/src/sticky/demo/index.vue';
import Style from 'C:/脚手架项目/quick_vue/src/style/demo/index.vue';
import SubmitBar from 'C:/脚手架项目/quick_vue/src/submit-bar/demo/index.vue';
import Swipe from 'C:/脚手架项目/quick_vue/src/swipe/demo/index.vue';
import SwipeCell from 'C:/脚手架项目/quick_vue/src/swipe-cell/demo/index.vue';
import Switch from 'C:/脚手架项目/quick_vue/src/switch/demo/index.vue';
import SwitchCell from 'C:/脚手架项目/quick_vue/src/switch-cell/demo/index.vue';
import Tab from 'C:/脚手架项目/quick_vue/src/tab/demo/index.vue';
import Tabbar from 'C:/脚手架项目/quick_vue/src/tabbar/demo/index.vue';
import Tag from 'C:/脚手架项目/quick_vue/src/tag/demo/index.vue';
import Toast from 'C:/脚手架项目/quick_vue/src/toast/demo/index.vue';
import TreeSelect from 'C:/脚手架项目/quick_vue/src/tree-select/demo/index.vue';
import Uploader from 'C:/脚手架项目/quick_vue/src/uploader/demo/index.vue';
import Wheel from 'C:/脚手架项目/quick_vue/src/wheel/demo/index.vue';

Vue.use(PackageEntry);

ActionSheet.name = 'demo-action-sheet';
AddressEdit.name = 'demo-address-edit';
AddressList.name = 'demo-address-list';
Area.name = 'demo-area';
Badge.name = 'demo-badge';
Button.name = 'demo-button';
Calendar.name = 'demo-calendar';
Card.name = 'demo-card';
Cascader.name = 'demo-cascader';
Cell.name = 'demo-cell';
Checkbox.name = 'demo-checkbox';
Circle.name = 'demo-circle';
Col.name = 'demo-col';
Collapse.name = 'demo-collapse';
ContactCard.name = 'demo-contact-card';
ContactEdit.name = 'demo-contact-edit';
ContactList.name = 'demo-contact-list';
CountDown.name = 'demo-count-down';
CouponList.name = 'demo-coupon-list';
DatetimePicker.name = 'demo-datetime-picker';
Dialog.name = 'demo-dialog';
Divider.name = 'demo-divider';
DropdownMenu.name = 'demo-dropdown-menu';
Empty.name = 'demo-empty';
Field.name = 'demo-field';
Form.name = 'demo-form';
GoodsAction.name = 'demo-goods-action';
Grid.name = 'demo-grid';
Icon.name = 'demo-icon';
Image.name = 'demo-image';
ImagePreview.name = 'demo-image-preview';
IndexBar.name = 'demo-index-bar';
Lazyload.name = 'demo-lazyload';
List.name = 'demo-list';
Loading.name = 'demo-loading';
NavBar.name = 'demo-nav-bar';
NoticeBar.name = 'demo-notice-bar';
Notify.name = 'demo-notify';
NumberKeyboard.name = 'demo-number-keyboard';
Overlay.name = 'demo-overlay';
Pagination.name = 'demo-pagination';
Panel.name = 'demo-panel';
PasswordInput.name = 'demo-password-input';
Picker.name = 'demo-picker';
Popover.name = 'demo-popover';
Popup.name = 'demo-popup';
Progress.name = 'demo-progress';
PullRefresh.name = 'demo-pull-refresh';
Radio.name = 'demo-radio';
Rate.name = 'demo-rate';
Search.name = 'demo-search';
ShareSheet.name = 'demo-share-sheet';
Sidebar.name = 'demo-sidebar';
Skeleton.name = 'demo-skeleton';
Sku.name = 'demo-sku';
Slider.name = 'demo-slider';
Stepper.name = 'demo-stepper';
Steps.name = 'demo-steps';
Sticky.name = 'demo-sticky';
Style.name = 'demo-style';
SubmitBar.name = 'demo-submit-bar';
Swipe.name = 'demo-swipe';
SwipeCell.name = 'demo-swipe-cell';
Switch.name = 'demo-switch';
SwitchCell.name = 'demo-switch-cell';
Tab.name = 'demo-tab';
Tabbar.name = 'demo-tabbar';
Tag.name = 'demo-tag';
Toast.name = 'demo-toast';
TreeSelect.name = 'demo-tree-select';
Uploader.name = 'demo-uploader';
Wheel.name = 'demo-wheel';

export const demos = {
  ActionSheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  Button,
  Calendar,
  Card,
  Cascader,
  Cell,
  Checkbox,
  Circle,
  Col,
  Collapse,
  ContactCard,
  ContactEdit,
  ContactList,
  CountDown,
  CouponList,
  DatetimePicker,
  Dialog,
  Divider,
  DropdownMenu,
  Empty,
  Field,
  Form,
  GoodsAction,
  Grid,
  Icon,
  Image,
  ImagePreview,
  IndexBar,
  Lazyload,
  List,
  Loading,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popover,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  Rate,
  Search,
  ShareSheet,
  Sidebar,
  Skeleton,
  Sku,
  Slider,
  Stepper,
  Steps,
  Sticky,
  Style,
  SubmitBar,
  Swipe,
  SwipeCell,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  Tag,
  Toast,
  TreeSelect,
  Uploader,
  Wheel
};
export const config = {
  "name": "QuickAct_Vue",
  "build": {
    "skipInstall": [
      "lazyload"
    ],
    "site": {
      "publicPath": ""
    },
    "vetur": {
      "tagPrefix": "quickact_"
    }
  },
  "site": {
    "defaultLang": "en-US",
    "versions": [],
    "baiduAnalytics": {
      "seed": ""
    },
    "htmlPluginOptions": {
      "meta": {
        "docsearch:version": "2.x"
      },
      "options": {
        "logo": "https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png"
      }
    },
    "locales": {
      "zh-CN": {
        "title": "QuickAct_Vue",
        "description": "活动 Vue 组件库",
        "logo": "https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png",
        "langLabel": "中文",
        "links": [
          {
            "logo": "https://b.yzcdn.cn/vant/logo/github.svg",
            "url": "https://github.com/LoveEocding/QuickAct_Vue"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "搜索文档..."
        },
        "nav": [
          {
            "title": "活动组件",
            "items": [
              {
                "path": "wheel",
                "title": "大转盘"
              },
              {
                "path": "cell",
                "title": "老虎机"
              },
              {
                "path": "icon",
                "title": "弹幕滚动"
              }
            ]
          },
          {
            "title": "交互组件",
            "items": [
              {
                "path": "button",
                "title": "上下翻页"
              },
              {
                "path": "cell",
                "title": "左右翻页"
              }
            ]
          }
        ]
      },
      "en-US": {
        "title": "quickact_vue",
        "description": "Mobile UI Components built on Vue",
        "logo": "https://habaocdn.fuhuibao.club/flb/common/1609203914529quickact_vue.png\"",
        "langLabel": "En",
        "links": [
          {
            "logo": "https://b.yzcdn.cn/vant/logo/github.svg",
            "url": "https://github.com/LoveEocding/QuickAct_Vue"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "Search..."
        },
        "nav": []
      }
    }
  }
}
