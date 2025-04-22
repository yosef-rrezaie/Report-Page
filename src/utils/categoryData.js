import { BsFillCloudFogFill, BsFillLightbulbFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";

const category = [
    {
      title: "فضای سبز و درخشان",
      desc: "آسیب به درختان با وضعیت نامناسب پارک",
      icon: <FaLeaf />,
      id : 1
    },
    {
      title: "زباله و نظافت",
      desc: "رها شدن زباله با سطل های پر و آلوده",
      icon: <GiEmptyWoodBucketHandle />,
      id : 2
    },
    {
      title: "دیوار نویسی و آلودگی بصری",
      desc: "نوشته ها یا تبلیغات نا زیباروی دیوارها",
      icon: <BsFillCloudFogFill />,
      id : 3
    },

    {
      title: "روشنایی معابر",
      desc: "چراغ خاموش یا نور کافی در خیابان",
      icon: <BsFillLightbulbFill />,
      id : 4
    },
  ];

export {category}