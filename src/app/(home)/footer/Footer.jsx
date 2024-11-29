import React, { Fragment } from "react";
import PrivacyMenu from "./PrivacyMenu";

const privacyMenu = [
    {
        label: 'Terms & Condition'
    },
    {
        label: 'License'
    },
    {
        label: 'Support'
    }
]

const FooterSection = () => {
    return (
        <div className="min-h-[95px] bg-[#F99106] py-5 md:py-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex text-white items-center justify-between flex-wrap">
                    <p className="text-xl">@ Copyright 2022. All Rights Reserved by Cooking Stuff</p>
                    <div className="column md:flex mt-3 lg:mt-0 gap-10">
                        {
                            privacyMenu.map((menu, index) => {
                                return (
                                    <Fragment key={`footer-menu-${index}`}>
                                        <PrivacyMenu menu={menu} index={index} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;