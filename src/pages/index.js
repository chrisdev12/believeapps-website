import React from "react";
import Main from "../components/main";
import Header from "../components/header";
import Card from "../components/card";
import Test from "../components/test";
import appImg from "../images/rotate.svg";
import qualityImg from "../images/settings.svg";
import webImg from "../images/responsive-design.svg";
import dataImg from "../images/layer.svg";

export default function index() {
  return (
    <div>
      <Header/>
      <Main />
      <section className="service-tarjets">
        <Card props={{ image: appImg, title: 'App development', desc: 'aaaa'}}/>
        <Card props={{ image: qualityImg, title: 'Quality', desc: 'aaaa'}}/>
        <Card props={{ image: webImg, title: 'Web development', desc: 'aaaa' }}/>
        <Card props={{ image: dataImg, title: 'Data analytic', desc: 'aaaa' }}/>
      </section>
      <Test/>
    </div>
  )
}
