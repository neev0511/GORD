const API_KEY = "b66c02de279d403a88a0e24c6323a692";

var res = [];

function getNews() {
  // fetch(
  //   "https://newsapi.org/v2/everything?q='fabry diseases'&language=en&apiKey=b66c02de279d403a88a0e24c6323a692"
  // )
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     news(data.articles);
  //   });
  var res = [
    {
      source: { id: null, name: "Business Wire" },
      author: null,
      title:
        "Aro Biotherapeutics Receives FDA Rare Pediatric Drug Designation for ABX1100 for the Treatment of Pompe Disease",
      description:
        "PHILADELPHIA--(BUSINESS WIRE)--Aro Biotherapeutics, a biotechnology company pioneering the development of tissue-targeted genetic medicines, today announced that the U.S. Food and Drug Administration (FDA) granted Rare Pediatric Drug (RPD) designation for ABX…",
      url: "https://www.businesswire.com/news/home/20220915005101/en/Aro-Biotherapeutics-Receives-FDA-Rare-Pediatric-Drug-Designation-for-ABX1100-for-the-Treatment-of-Pompe-Disease",
      urlToImage:
        "https://mms.businesswire.com/media/20220915005101/en/695148/23/ARO_Full_Color_Logo_2018SEP05_F.jpg",
      publishedAt: "2022-09-15T13:06:59Z",
      content:
        "PHILADELPHIA--(BUSINESS WIRE)--Aro Biotherapeutics, a biotechnology company pioneering the development of tissue-targeted genetic medicines, today announced that the U.S. Food and Drug Administration… [+2207 chars]",
    },
    {
      source: { id: null, name: "Business Wire" },
      author: null,
      title:
        "AVROBIO Receives Rare Pediatric Disease Designation from U.S. Food and Drug Administration (FDA) for First Gene Therapy in Development for Cystinosis",
      description:
        "CAMBRIDGE, Mass.--(BUSINESS WIRE)---- $AVRO--AVROBIO, Inc. (Nasdaq: AVRO), a leading clinical-stage gene therapy company working to free people from a lifetime of genetic disease, today announced that the U.S. Food and Drug Administration (FDA) has granted ra…",
      url: "https://www.businesswire.com/news/home/20220920005367/en/AVROBIO-Receives-Rare-Pediatric-Disease-Designation-from-U.S.-Food-and-Drug-Administration-FDA-for-First-Gene-Therapy-in-Development-for-Cystinosis",
      urlToImage:
        "https://mms.businesswire.com/media/20220920005367/en/774246/23/AVROBIO_LOGO.jpg",
      publishedAt: "2022-09-20T11:10:32Z",
      content:
        "CAMBRIDGE, Mass.--(BUSINESS WIRE)--AVROBIO, Inc. (Nasdaq: AVRO), a leading clinical-stage gene therapy company working to free people from a lifetime of genetic disease, today announced that the U.S.… [+8245 chars]",
    },
    {
      source: { id: null, name: "Seeking Alpha" },
      author: "SA Transcripts",
      title:
        "Sanofi (SNY) Presents at Citi's 17th Annual BioPharma Conference (Transcript)",
      description:
        "Sanofi (NASDAQ:NASDAQ:SNY) Citi’s 17th Annual BioPharma Conference September 7, 2022 2:40 PM ETCompany ParticipantsBill Sibold - EVP, Sanofi Genzyme; President Sanofi NA, Sanofi...",
      url: "https://seekingalpha.com/article/4539545-sanofi-sny-presents-citis-17th-annual-biopharma-conference-transcript",
      urlToImage:
        "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
      publishedAt: "2022-09-07T23:41:09Z",
      content:
        "Sanofi (NASDAQ:SNY) Citi’s 17th Annual BioPharma Conference September 7, 2022 2:40 PM ET\r\n Company Participants\r\n Bill Sibold - EVP, Sanofi Genzyme; President Sanofi NA, Sanofi SA\r\n Conference Call P… [+33055 chars]",
    },
    {
      source: { id: null, name: "Business Wire" },
      author: null,
      title:
        "AVROBIO Announces Neuronopathic Mucopolysaccharidosis Type II (nMPS-II) or Hunter Syndrome Clinical Trial Application (CTA) Accepted by U.K. Regulatory Agency to Initiate Pediatric Phase 1/2 Gene Therapy Trial",
      description:
        "CAMBRIDGE, Mass.--(BUSINESS WIRE)---- $AVRO--AVROBIO, Inc. (Nasdaq: AVRO), a leading clinical-stage gene therapy company working to free people from a lifetime of genetic disease, today announced that the U.K. Medicines and Healthcare Products Regulatory Agen…",
      url: "https://www.businesswire.com/news/home/20220914005543/en/AVROBIO-Announces-Neuronopathic-Mucopolysaccharidosis-Type-II-nMPS-II-or-Hunter-Syndrome-Clinical-Trial-Application-CTA-Accepted-by-U.K.-Regulatory-Agency-to-Initiate-Pediatric-Phase-12-Gene-Therapy-Trial",
      urlToImage:
        "https://mms.businesswire.com/media/20220914005543/en/774246/23/AVROBIO_LOGO.jpg",
      publishedAt: "2022-09-14T11:39:58Z",
      content:
        "CAMBRIDGE, Mass.--(BUSINESS WIRE)--AVROBIO, Inc. (Nasdaq: AVRO), a leading clinical-stage gene therapy company working to free people from a lifetime of genetic disease, today announced that the U.K.… [+10519 chars]",
    },
    {
      source: { id: null, name: "PRNewswire" },
      author: null,
      title:
        "Registration Now Open for 2023 MDA Clinical & Scientific Conference, to Showcase Cutting Edge Research Advancements and Clinical Achievements in Neuromuscular Disease",
      description:
        "The gathering of global leaders at MDA's annual conference will be presented both in-person in Dallas, TX, and virtually, March 19-22, 2023 NEW YORK, Sept. 12, 2022 /PRNewswire/ -- The Muscular Dystrophy Association (MDA) today announced that registration is …",
      url: "https://www.prnewswire.com/news-releases/registration-now-open-for-2023-mda-clinical--scientific-conference-to-showcase-cutting-edge-research-advancements-and-clinical-achievements-in-neuromuscular-disease-301621807.html",
      urlToImage:
        "https://mma.prnewswire.com/media/1895881/Muscular_Dystrophy_Association_Photo.jpg?p=facebook",
      publishedAt: "2022-09-12T13:00:00Z",
      content:
        "The gathering of global leaders at MDA's annual conference will be presented both in-person in Dallas, TX, and virtually, March 19-22, 2023\r\nNEW YORK, Sept. 12, 2022 /PRNewswire/ -- The Muscular Dyst… [+4620 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X staff",
      title:
        "Researchers identify a potential path against inherited neurological disease",
      description:
        "Scientists at the Icahn School of Medicine at Mount Sinai in New York, the National Center for Advancing Translational Sciences (NCATS), and elsewhere have reversed the effects of several life-threatening inherited neurodegenerative diseases called lysosomal …",
      url: "https://phys.org/news/2022-09-potential-path-inherited-neurological-disease.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/researchers-identify-a-3.jpg",
      publishedAt: "2022-09-08T20:37:04Z",
      content:
        "Scientists at the Icahn School of Medicine at Mount Sinai in New York, the National Center for Advancing Translational Sciences (NCATS), and elsewhere have reversed the effects of several life-threat… [+4367 chars]",
    },
    {
      source: { id: null, name: "Business Wire" },
      author: null,
      title:
        "AceLink Therapeutics Receives Orphan Drug Designation for its Novel GCS Inhibitor AL01211 for the Treatment of Fabry Disease",
      description:
        "NEWARK, Calif.--(BUSINESS WIRE)--AceLink Therapeutics, Inc. (AceLink), an innovative biopharmaceutical company developing transformative therapies for genetic diseases, today announced it has received Orphan Drug Designation (ODD) from the U.S. Food and Drug …",
      url: "https://www.businesswire.com/news/home/20220907005407/en/AceLink-Therapeutics-Receives-Orphan-Drug-Designation-for-its-Novel-GCS-Inhibitor-AL01211-for-the-Treatment-of-Fabry-Disease",
      urlToImage:
        "https://mms.businesswire.com/media/20220907005407/en/1563157/23/AceLink_new_logo.jpg",
      publishedAt: "2022-09-07T13:05:03Z",
      content:
        "NEWARK, Calif.--(BUSINESS WIRE)--AceLink Therapeutics, Inc. (AceLink), an innovative biopharmaceutical company developing transformative therapies for genetic diseases, today announced it has receive… [+2454 chars]",
    },
    {
      source: { id: null, name: "Nature.com" },
      author: "Xin Wang, Anne Ramat, Martine Simonelig, Mo-Fang Liu",
      title:
        "Emerging roles and functional mechanisms of PIWI-interacting RNAs",
      description:
        "PIWI-interacting RNAs (piRNAs) are small non-coding RNAs with essential roles in germ line development through silencing of transposable elements and in regulation of protein-coding genes. Recent studies have deepened our understanding of the biogenesis and f…",
      url: "https://www.nature.com/articles/s41580-022-00528-0",
      urlToImage:
        "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41580-022-00528-0/MediaObjects/41580_2022_528_Fig1_HTML.png",
      publishedAt: "2022-09-14T00:00:00Z",
      content:
        "Lau, N. C. et al. Characterization of the piRNA complex from rat testes. Science313, 363367 (2006).\r\nCAS \r\n PubMed \r\nGoogle Scholar \r\nGrivna, S. T., Beyret, E., Wang, Z. & Lin, H. A … [+63862 chars]",
    },
    {
      source: { id: null, name: "Seeking Alpha" },
      author: "SA Transcripts",
      title:
        "Sanofi (SNY) Presents at Citi's 17th Annual BioPharma Conference (Transcript)",
      description:
        "Sanofi (NASDAQ:NASDAQ:SNY) Citi’s 17th Annual BioPharma Conference September 7, 2022 2:40 PM ETCompany ParticipantsBill Sibold - EVP, Sanofi Genzyme; President Sanofi NA, Sanofi...",
      url: "https://seekingalpha.com/article/4539545-sanofi-sny-presents-citis-17th-annual-biopharma-conference-transcript",
      urlToImage:
        "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
      publishedAt: "2022-09-07T23:41:09Z",
      content:
        "Sanofi (NASDAQ:SNY) Citi’s 17th Annual BioPharma Conference September 7, 2022 2:40 PM ET\r\n Company Participants\r\n Bill Sibold - EVP, Sanofi Genzyme; President Sanofi NA, Sanofi SA\r\n Conference Call P… [+33055 chars]",
    },
    {
      source: { id: null, name: "Thehillstimes.in" },
      author: "The Hills Times",
      title:
        "Actions On A Global Scale Are Essential For The Restoration Of The Ozone Layer",
      description:
        "The depletion of the ozone layer increases the amount of UV reaching the Earth’s surface. Laboratory and epidemiological studies suggest that UV causes non-melanoma skin cancer and plays a major role in malignant melanoma development. In addition, UV has been…",
      url: "https://thehillstimes.in/featured/actions-on-a-global-scale-are-essential-for-the-restoration-of-the-ozone-layer",
      urlToImage:
        "https://thehillstimes.in/wp-content/uploads/2022/09/852-1.jpg",
      publishedAt: "2022-09-19T06:43:40Z",
      content:
        "By: Priyanka Saurabh\r\nOzone is a naturally occurring molecule made up of three oxygen atoms. Ozone is found in different levels of the Earths atmosphere. About 90% of the ozone in the atmosphere is c… [+5266 chars]",
    },
    {
      source: { id: null, name: "Gadsdentimes.com" },
      author: ", Gadsden Times",
      title:
        "Time to get a flu shot: Viral infection peaks in fall, winter months - Gadsden Times",
      description:
        " Time to get a flu shot: Viral infection peaks in fall, winter months  Gadsden Times\r\nHealth officials encourage area residents to get their flu shots  MyNBC5-WPTZ\r\nHere's the Early Sign That Has Chicago's Top Doctor Worried About Upc…",
      url: "https://www.gadsdentimes.com/story/news/2022/10/02/flu-season-alabama-cdc-health-experts-recommend-getting-vaccination/69529876007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/09/30/NTGT/b4e6f29a-f4ca-41b1-9831-c75cb98d82ad-GettyImages-1355578169.jpg?auto=webp&crop=2999,1687,x0,y152&format=pjpg&width=1200",
      publishedAt: "2022-10-02T02:05:00Z",
      content:
        "It's football season, changing-leaves season, pumpkin spice season and flu season.\r\nIf you want to enjoy the first three and escape contact with the fourth, the Centers for Disease Control and Preven… [+3478 chars]",
    },
    {
      source: { id: null, name: "Motley Fool" },
      author: "newsfeedback@fool.com (Alex Carchidi)",
      title: "2 Risky Cathie Wood Growth Stocks to Buy and Hold for 5 Years",
      description:
        "These biotech companies will either sink or swim before the end of the decade.",
      url: "https://www.fool.com/investing/2022/09/19/2-risky-cathie-wood-growth-stocks-to-buy-and-hold/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/701090/two-scientists-consider-a-readout-with-genetic-data.jpg",
      publishedAt: "2022-09-19T14:15:00Z",
      content:
        "Portfolio manager Cathie Wood is known for having an aggressive appetite for risk when it comes to the investments she makes in her exchange-traded fund, the ARK Innovation ETF (ARKK -1.78%). Between… [+4122 chars]",
    },
    {
      source: { id: null, name: "Psychology Today" },
      author: "Bill Sullivan Ph.D.",
      title: "What Genes Tell Us About Ourselves (and What They Don’t)",
      description:
        "Can a genetic test predict physical traits, diseases, and behaviors? Here's what you need to know.",
      url: "https://www.psychologytoday.com/us/blog/pleased-meet-me/202209/what-genes-tell-us-about-ourselves-and-what-they-don-t",
      urlToImage:
        "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2022-09/dna_puzzle_image_by_arek_socha_from_pixabay.jpg?itok=AamaRktG",
      publishedAt: "2022-09-12T14:19:52Z",
      content:
        "The popularity of genetic testing has surged in recent years and is predicted to be a $2.5 billion industry by 2024. Commercial companies have developed affordable, easy-to-use kits that allow custom… [+6668 chars]",
    },
    {
      source: { id: null, name: "Psychology Today" },
      author: "Bill Sullivan Ph.D.",
      title: "What Genes Tell Us About Ourselves (and What They Don’t)",
      description:
        "Can a genetic test predict physical traits, diseases, and behaviors? Here's what you need to know.",
      url: "https://www.psychologytoday.com/ca/blog/pleased-meet-me/202209/what-genes-tell-us-about-ourselves-and-what-they-don-t",
      urlToImage:
        "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2022-09/dna_puzzle_image_by_arek_socha_from_pixabay.jpg?itok=AamaRktG",
      publishedAt: "2022-09-12T14:19:52Z",
      content:
        "The popularity of genetic testing has surged in recent years and is predicted to be a $2.5 billion industry by 2024. Commercial companies have developed affordable, easy-to-use kits that allow custom… [+6668 chars]",
    },
    {
      source: { id: null, name: "Motley Fool" },
      author: "newsfeedback@fool.com (Rachel Warren)",
      title: "Got $1,000? 2 Safe Stocks to Buy This Month",
      description:
        "The stocks can lend growth and peace of mind as you add to your portfolio.",
      url: "https://www.fool.com/investing/2022/09/30/got-1000-2-safe-stocks-to-buy-this-month/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/702694/dna-sequencing-genome-science-lab.jpg",
      publishedAt: "2022-09-30T13:45:00Z",
      content:
        "Are you searching for steady stocks to put your money into right now? While no investment is entirely devoid of risk, you don't have to look far to find stable investments that can stand the test of … [+3654 chars]",
    },
  ];
  news(res);
}

function news(res) {
  var i = 0;

  document.getElementById("contain").innerHTML = "";
  // for (let j in data) {
  //   if (
  //     data[j].urlToImage != null &&
  //     data[j].description !== "" &&
  //     (data[j].urlToImage.includes(".jpg") ||
  //       data[j].urlToImage.includes(".png") ||
  //       data[j].urlToImage.includes(".webp"))
  //   ) {
  //     res.push(data[j]);
  //   }
  // }
  while (i < 15) {
    $("#contain").append(
      `
          <a class="white" href="` +
        res[i].url +
        `">
              <div class="card">
                  <div class="card__header">
                  <img src="` +
        res[i].urlToImage +
        `" alt="card__image" class="card__image" width="600" />
                  </div>
                  <div class="card__body">
                  <h4>` +
        res[i].title +
        `</h4>
                  <p>` +
        res[i].description +
        `</p>
                  </div>
              </div>
          </a>
      `
    );
    i++;
  }
}
getNews();
