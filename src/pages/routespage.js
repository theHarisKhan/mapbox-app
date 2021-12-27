import styled from "styled-components";
import DecisionBoard from "../components/DecisionBoard";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import BackArrow from "../../public/back-arrow.svg";
import Link from "next/link";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFyaXNraGFuLWRldi15dCIsImEiOiJja3c4eTV0YXA3YnN3MzBvMHJ4ZHR5dGZiIn0.mUEld_pCK9STrUedk41Tqw";

function routespage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [74.522897, 32.494499],
      zoom: 12,
    });
  });

  return (
    <RouteWrap>
      <Link href="/welcomepage">
        <BackBtn>
          <BackIcon src={BackArrow.src} alt="icon" />
        </BackBtn>
      </Link>
      <Map id="map"></Map>
      <DecisionBoard />
    </RouteWrap>
  );
}

export default routespage;

const RouteWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Map = styled.div`
  flex: 1;
`;

const BackBtn = styled.button`
  background: #0e2a47;
  position: absolute;
  height: 45px;
  width: 45px;
  top: 20px;
  left: 25px;
  border-radius: 50px;
  z-index: 2;
  transition: 0.3s all;
  cursor: pointer;
  border: 1px solid #fff;
  display: grid;
  place-items: center;
  &:hover {
    transform: scale(0.95);
  }
`;
const BackIcon = styled.img``;
