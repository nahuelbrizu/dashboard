import React from "react";
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import Stacked from "../components/Charts/Stacked";
import Pie from "../components/Charts/Pie";
import Button from "../components/Button";
import SparkLine from "../components/Charts/SparkLine";
import {useStateContext} from "../contexts/contextProvider";

import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";

const Ecommerce = () => {
    return(
        <div className="mt-12">
            <div className="flex flex-wrap
            lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200
                dark:bg-secondary-bg h-44
                rounded-xl w-full lg:w-80 p-8 pt-9 m-3
                bg-hero-pattern bg-no-repeat bg-cover
                bg-center">

                </div>
            </div>
        </div>
    )
}

export default Ecommerce;