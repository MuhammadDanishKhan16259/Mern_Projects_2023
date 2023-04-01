import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../style/ParticularInforamtion.css";

export default function ParticularInforamtion() {
  let [item, setItem] = useState([
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "By Maggie Hiufu Wong, CNN",
      title:
        "Yelling, cursing and fine food: Secrets from the world's toughest dining scene",
      description:
        "Publicist Geoffrey Wu works with some of the most famous restaurants in Hong Kong, He offers CNN a firsthand look at what it takes to build a successful venue in one of the most challenging cities in world in which to operate a restaurant.",
      url: "https://www.cnn.com/travel/article/geoffrey-wu-hong-kong-toughest-tables/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220927101334-06-geoffrey-wu-hong-kong-toughest-tables-chaat-super-tease.jpg",
      publishedAt: "2022-10-18T02:38:27Z",
      content:
        "(CNN) Hong Kong is widely considered one of the most challenging cities in the world to operate a restaurant -- a roiling cauldron of changing tastes, cleaver-sharp competition and unsavory economics… [+10109 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Taiwan's Foxconn says wants its customers to sell a lot of EVs - Reuters",
      description:
        'Taiwan\'s Foxconn <a href="https://www.reuters.com/companies/2317.TW" target="_blank">(2317.TW)</a>, the world\'s largest contract electronics maker, said on Tuesday it was not in the business of selling its own electric vehicle brand but wanted its customers t…',
      url: "https://www.reuters.com/business/autos-transportation/taiwans-foxconn-says-wants-its-customers-sell-lot-evs-2022-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/FvJ5w9IuHTb2-1qHZuXT8qSQAno=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5NTKPU2FVFIHBMBXX3AKCIHKWM.jpg",
      publishedAt: "2022-10-18T02:03:36Z",
      content:
        "TAIPEI, Oct 18 (Reuters) - Taiwan's Foxconn (2317.TW), the world's largest contract electronics maker, said on Tuesday it was not in the business of selling its own electric vehicle brand but wanted … [+601 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Goldman to merge investment banking, trading as Marcus takes backseat - Reuters",
      description:
        'Goldman Sachs Group Inc <a href="https://www.reuters.com/companies/GS.N" target="_blank">(GS.N)</a> is expected to announce a major reorganization of its business lines on Tuesday, combining its trading and investment-banking divisions while likely sidelining…',
      url: "https://www.reuters.com/business/finance/goldman-merge-investment-banking-trading-marcus-takes-backseat-2022-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/OPtXcYRylvgr0YLAHwqzLOn_Jvo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5TQB4Q3K2RNPZFGZZMBJDOYP6Q.jpg",
      publishedAt: "2022-10-18T04:33:00Z",
      content:
        "NEW YORK, Oct 18 (Reuters) - Goldman Sachs Group Inc (GS.N) is expected to announce a major reorganization of its business lines on Tuesday, combining its trading and investment-banking divisions whi… [+4015 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title: "Apple Stops Signing iOS 16.0.2 Following Release of iOS 16.0.3",
      description:
        "Following the release of iOS 16.0.3 last week, Apple has stopped signing iOS 16.0.2, meaning it is no longer possible to downgrade an iPhone to iOS 16.0.2. This leaves iOS 16.0.3 and the iOS 16.1 beta as the only iOS 16 versions that are still being signed.\n\n…",
      url: "https://www.macrumors.com/2022/10/17/apple-stops-signing-ios-16-0-2/",
      urlToImage:
        "https://images.macrumors.com/t/N9Z9unz3EJPbaI9yH7eOzwzIq6w=/2500x/article-new/2022/09/iOS-16.0.2-Beta-Feature.jpg",
      publishedAt: "2022-10-18T03:03:38Z",
      content:
        "Following the release of iOS 16.0.3 last week, Apple has stopped signing iOS 16.0.2, meaning it is no longer possible to downgrade an iPhone to iOS 16.0.2. This leaves iOS 16.0.3 and the iOS 16.1 bet… [+690 chars]",
    },
  ]);
  let [item2, setItem2] = useState([
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "José María López",
      title: "50 cosas que puedes pedirle a Siri y no sabías que era capaz",
      description:
        "No hace falta recordar que Siri es el asistente virtual de Apple. No necesita presentaciones. Lo puedes encontrar en tu iPhone, en tu Apple Watch, en tu iPad, en tu Mac y en tu HomePod. También está en el Apple TV. Y hace cosas por ti en segundo plano, como s…",
      url: "https://hipertextual.com/2022/10/comandos-siri",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/Siri-App-Logo-Purple-Background.jpg?fit=1920%2C1280&quality=60&strip=all&ssl=1",
      publishedAt: "2022-10-18T03:20:00Z",
      content:
        "No hace falta recordar que Siri es el asistente virtual de Apple. No necesita presentaciones. Lo puedes encontrar en tu iPhone, en tu Apple Watch, en tu iPad, en tu Mac y en tu HomePod. También está … [+6812 chars]",
    },
    {
      source: {
        id: null,
        name: "Fast Company",
      },
      author: "Jesus Diaz",
      title:
        "I love Lenovo’s new crazy laptop design, and I hate myself for it",
      description:
        "Lenovo’s new concept laptop goes from landscape to portrait, the 21st century version of the Radius Pivot monitors from the ’90s.\n\nHere’s yet another doodad that nobody asked for: a laptop with a typical landscape screen that mechanically unrolls into a tall,…",
      url: "https://www.fastcompany.com/90796651/i-love-lenovos-new-crazy-laptop-design-and-i-hate-myself-for-it?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss",
      urlToImage:
        "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/10/i-1-90796651-lenovo-laptop.jpg",
      publishedAt: "2022-10-18T00:01:00Z",
      content:
        "Here’s yet another doodad that nobody asked for: a laptop with a typical landscape screen that mechanically unrolls into a tall, portrait mode. It increases its vertical resolution so you can, say, b… [+6669 chars]",
    },
  ]);
  let navigate = useNavigate();
  let location = useLocation();
  let data = location.state;

  return (
    <>
      <section className="particularInformation">
        <div className="information">
          <button onClick={() => navigate("/")}>Go Back</button>
          <div className="top__part">
            <h1>{data.title}</h1>
            <h4>
              {data.author} . {data.publishedAt}
            </h4>
          </div>
          <img src={data.urlToImage} alt={data.title} />
          <div className="content">
            <p>{data.content}</p>
            <p>{data.description}</p>
          </div>

          <div className="bottomCard">
            {item2.map((value, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  title="read more"
                  onClick={() => navigate("", { state: value })}
                >
                  <img src={value.urlToImage} alt="" />
                  <h4>{value.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right__side">
          <h1>Top News</h1>
          {item.map((value, index) => {
            return (
              <div
                className="card"
                key={index}
                title="read more"
                onClick={() => navigate("", { state: value })}
              >
                <img src={value.urlToImage} alt="" />
                <h4>{value.title}</h4>
              </div>
            );
          })}
        </div>
      </section>
      <div className="footer">
        <h4>© 2022 Shaykh Mirzaban All Rights Reserved.</h4>
      </div>
    </>
  );
}
