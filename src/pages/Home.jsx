import React from "react";
import homeBg from "/home-bg.jpg";
import statusIcon from "/truck-box.svg";
import priceIcon from "/tags.svg";
import outletIcon from "/marker.svg";
import mascot from "/mascot.png";
import mainLogo from "/logo_color.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import FeatureButton from "../components/FeatureButton";
import poster1 from "../assets/2100x600.png";
import poster2 from "../assets/2100x600_orange.png";
import poster3 from "../assets/2100x600_blue.png";

const Home = () => {
  const features = [
    { icon: statusIcon, path: "tracking", label: "Lacak" },
    { icon: priceIcon, path: "pricing", label: "Harga" },
    { icon: outletIcon, path: "outlet", label: "Outlet" },
  ];

  const services = [
    {
      title: "Pengiriman Kendaraan",
      description:
        "Menerima jasa pengiriman berbagai jenis kendaraan dari dan menuju seluruh daerah di Indonesia.",
    },
    {
      title: "Pindahan Rumah / Apartemen / Kost / Pabrik",
      description:
        "Melayani jasa pindahan rumah / pabrik. Dari mulai packaging sampai trasport ke tempat tujuan.",
    },
    {
      title: "Pengiriman Material Proyek",
      description:
        "Melayani pengiriman berbagai material proyek segala ukuran ke seluruh daerah di Indonesia.",
    },
    {
      title: "Pengiriman Barang Promo / Pameran",
      description:
        "Melayani pengiriman berbagai jenis barang dan alat promosi dan pameran berbagai tipe ke seluruh Indonesia.",
    },
    {
      title: "Pengiriman Kontainer",
      description:
        "Menyediakan jasa pengiriman dan pengangkutan menggunakan kontainer ukuran standar internasional.",
    },
    {
      title: "Trucking",
      description:
        "Menerima jasa pengiriman aneka barang dengan menggunakan armada truck. Tersedia berbagai ukuran truck.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <img
        src={homeBg}
        alt="Background"
        style={{
          position: "fixed",
          top: 0,
          minWidth: "110%",
          minHeight: "110%",
          aspectRatio: "initial",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <section
        style={{
          marginTop: "4rem",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          padding: "0rem 0 4rem",
          gap: "2.5rem",
        }}
      >
        <Carousel posters={[poster1, poster2, poster3]} />
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxSizing: "border-box",
            width: "min(calc(100% - 40px), 600px)",
          }}
        >
          {features.map((item, index) => (
            <FeatureButton item={item} index={index} key={index} />
          ))}
        </div>
      </section>
      <section
        style={{
          display: "flex",
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50svh",
          padding: "4rem 0",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "20px",
            padding: "2rem 1.5rem 1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "space-around",
            boxSizing: "border-box",
            minWidth: "min(90%, 600px)",
            width: "max(90%, 600px)",
            maxWidth: "100%",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              padding: "0 3rem",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              gap: "1rem",
            }}>
              <img
                src={mascot}
                alt="TXE Express mascot"
                style={{
                  width: "8rem",
                  height: "8rem",
                  marginBottom: "1rem",
                }}
              />
              <img
                src={mainLogo}
                alt="TXE Express logo"
                style={{
                  width: "auto",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              />
            </div>
            <div
              style={{
                flex: 2,
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                "Tepat Waktu dan Aman Sampai Tujuan"
              </h2>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Menyediakan jasa pengiriman barang besar/kargo ke seluruh
                wilayah di Indonesia
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: "1rem",
              width: "100%",
            }}
          >
            {services.map((service, index) => (
              <Card key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
