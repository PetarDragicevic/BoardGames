import React from "react";
import "./Cenovnik.css";
import Table from "react-bootstrap/Table";
import CenovnikTable from "./CenovnikTable";

import SminkaData from "./Datas/SminkaData";
import ManikirData from "./Datas/ManikirData";
import ZenskaDepilacija from "./Datas/ZenskaDepilacija";
import EpikacijaData from "./Datas/EpikacijaData";
import TretmaniTelaData from "./Datas/TretmaniTelaData";
import NadogradnjaData from "./Datas/NadogradnjaData";
import TetoviranjeData from "./Datas/TetoviranjeData";
import MuskaDepilacija from "./Datas/MuskaDepilacija";
import EpilacijaMuskaData from "./Datas/EpilacijaMuskaData";


function Cenovnik() {

  const dataSminka = SminkaData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataManikir = ManikirData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataDepilacijaZ = ZenskaDepilacija.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataDepilacijaM = MuskaDepilacija.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataEpilacija = EpikacijaData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataEpilacijaMuska = EpilacijaMuskaData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataLaser = TretmaniTelaData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataNadogradnja = NadogradnjaData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });
  const dataTetoviranje = TetoviranjeData.map((datas, idx) => {
    return (
      <CenovnikTable 
      key={idx} 
      title={datas.title} 
      price={datas.price} />
    );
  });

  return (
    <div>
      <img
        className="wallpaper img-thumbnail img-fluid"
        src="materijal/wallpapers/cenovnik-wallpaper.jpg"
      />
    <div className="conteiner">
      <h1>Cenovnik</h1>
      <div className="table-conteiner">
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>ŠMINKA</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataSminka}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>MANIKIR</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataManikir}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>ŽENSKA DEPILACIJA</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataDepilacijaZ}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>MUŠKA DEPILACIJA</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataDepilacijaM}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>LASERSKA EPILACIJA - Žene</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataEpilacija}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>LASERSKA EPILACIJA - Muškarci</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataEpilacijaMuska}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>TRETMANI TELA</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataLaser}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>SVILENE TREPAVICE</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataNadogradnja}</tbody>
      </Table>
      <br></br>
      <br></br>
      <Table striped bordered hover size="sm" className="table">
        <thead className="table-head">
          <tr>
            <td colSpan={2}>TRAJNA SMINKA</td>
            <td className="cena" colSpan={2}>Cena</td>
          </tr>
        </thead>
        <tbody className="table-body">{dataTetoviranje}</tbody>
      </Table>
      </div>
    </div>
    </div>
  );
}

export default Cenovnik;
