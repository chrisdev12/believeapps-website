import React, { useState, useEffect } from "react";
import Nav from "../components/navbar";
import Main from "../components/main";
import Header from "../components/header";
import Card from "../components/card";
import Test from "../components/test";
import appImg from "../images/rotate.svg";
import qualityImg from "../images/settings.svg";
import webImg from "../images/responsive-design.svg";
import dataImg from "../images/layer.svg";

export default function index() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() =>
      setRedirect(true),
    5000);
  }, []);

  if (!redirect) {
    return  (
      <div className="banner">
        <h1>BelieveApps</h1>
        <h2>Believe in the future</h2>
      </div>
    )
  } 

  return (
    <div>
      <Nav/>
      <Header props={['Believe','the','future']}/>
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
