import React from "react";

const QuickDetails = () => {
    return (
        <div className="h-11 px-5 py-2.5 bg-amber-600  bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur-2xl justify-start items-center gap-5 inline-flex">
            <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">Platform:</div>
            <div className="text-indigo-950 text-lg font-semibold">Kaggle</div>
        </div>
    );
};

const Details = () => {
    return (
        <div className="px-5 py-2.5 bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
            <div className="text-indigo-950 text-2xl font-medium">🚀 Exciting News! 🚀</div>
            <div className="text-indigo-950 text-[17px] font-normal">🌐 Calling all AI enthusiasts and deep learning wizards! 🤖✨<br/>We are thrilled to announce the launch of a groundbreaking Deep Learning Competition: **"Bangladesh Road Object Detection for Autonomous Vehicles Challenge"** on Kaggle! 🇧🇩🚗</div>
        </div>
    );
};

export { QuickDetails, Details }