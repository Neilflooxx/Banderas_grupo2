const countries = [
  "Arabia Saudita", "China", "Malta", "Uruguay", "Palaos", "República Dominicana",
  "Indonesia", "Hungría", "Israel", "Angola", "Surinam", "Italia",
  "Mozambique", "Dinamarca", "Afganistán", "Corea del Sur", "Francia",
  "Líbano", "Barbados", "Eritrea", "Chequia", "Senegal", "Seychelles",
  "Singapur", "Islandia", "Honduras", "Tonga", "Santa Lucía"
];

const flagGrid = document.getElementById("flagGrid");

countries.forEach(country => {
  const container = document.createElement("div");
  container.className = "flag-container";

  const canvas = document.createElement("canvas");
  canvas.width = 160;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");

  drawFlag(ctx, country);

  const label = document.createElement("div");
  label.className = "country-name";
  label.textContent = country;

  container.appendChild(canvas);
  container.appendChild(label);
  flagGrid.appendChild(container);
});

function drawFlag(ctx, country) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 160, 100);

  switch (country) {
    case "Arabia Saudita":
      ctx.fillStyle = "#006C35"; ctx.fillRect(0,0,160,100); break;
    case "China":
      ctx.fillStyle = "#DE2910"; ctx.fillRect(0,0,160,100); break;
    case "Malta":
      ctx.fillStyle = "white"; ctx.fillRect(0,0,80,100);
      ctx.fillStyle = "#C60C30"; ctx.fillRect(80,0,80,100); break;
    case "Uruguay":
      for (let i=0; i<9; i++) {
        ctx.fillStyle = i%2==0 ? "white" : "#0038A8";
        ctx.fillRect(0, i*11, 160, 11);
      }
      break;
    case "Palaos":
      ctx.fillStyle = "#4AADD6"; ctx.fillRect(0,0,160,100);
      ctx.beginPath(); ctx.arc(80,50,25,0,2*Math.PI);
      ctx.fillStyle = "#FFDE00"; ctx.fill(); break;
    case "República Dominicana":
      ctx.fillStyle = "#002D62"; ctx.fillRect(0,0,80,50);
      ctx.fillRect(80,50,80,50);
      ctx.fillStyle = "#CE1126"; ctx.fillRect(80,0,80,50);
      ctx.fillRect(0,50,80,50);
      ctx.fillStyle = "white"; ctx.fillRect(70,40,20,20);
      break;
    case "Indonesia":
      ctx.fillStyle = "#FF0000"; ctx.fillRect(0,0,160,50);
      ctx.fillStyle = "white"; ctx.fillRect(0,50,160,50); break;
    case "Hungría":
      ctx.fillStyle = "#CD2A3E"; ctx.fillRect(0,0,160,33);
      ctx.fillStyle = "white"; ctx.fillRect(0,33,160,33);
      ctx.fillStyle = "#436F4D"; ctx.fillRect(0,66,160,34); break;
    case "Israel":
      ctx.fillStyle = "#0038B8"; ctx.fillRect(0,10,160,10);
      ctx.fillRect(0,80,160,10); break;
    case "Angola":
      ctx.fillStyle = "#CC092F"; ctx.fillRect(0,0,160,50);
      ctx.fillStyle = "#000000"; ctx.fillRect(0,50,160,50); break;
    case "Surinam":
      ctx.fillStyle = "#377E3F"; ctx.fillRect(0,0,160,20);
      ctx.fillRect(0,80,160,20);
      ctx.fillStyle = "#B40A2D"; ctx.fillRect(0,30,160,40);
      ctx.fillStyle = "#FFD100"; ctx.beginPath();
      ctx.moveTo(80,40); ctx.lineTo(90,60); ctx.lineTo(70,60);
      ctx.closePath(); ctx.fill(); break;
    case "Italia":
      ctx.fillStyle = "#009246"; ctx.fillRect(0,0,53,100);
      ctx.fillStyle = "white"; ctx.fillRect(53,0,53,100);
      ctx.fillStyle = "#CE2B37"; ctx.fillRect(106,0,54,100); break;
    case "Mozambique":
      ctx.fillStyle = "#007168"; ctx.fillRect(0,0,160,33);
      ctx.fillStyle = "#FFD100"; ctx.fillRect(0,33,160,33);
      ctx.fillStyle = "#CE1126"; ctx.fillRect(0,66,160,34); break;
    case "Dinamarca":
      ctx.fillStyle = "#C60C30"; ctx.fillRect(0,0,160,100);
      ctx.fillStyle = "white";
      ctx.fillRect(60,0,20,100);
      ctx.fillRect(0,40,160,20); break;
    case "Afganistán":
      ctx.fillStyle = "#000000"; ctx.fillRect(0,0,53,100);
      ctx.fillStyle = "#D32011"; ctx.fillRect(53,0,53,100);
      ctx.fillStyle = "#007847"; ctx.fillRect(106,0,54,100); break;
    case "Corea del Sur":
      ctx.fillStyle = "white"; ctx.fillRect(0,0,160,100);
      ctx.beginPath(); ctx.arc(80,50,25,0,2*Math.PI);
      ctx.fillStyle = "#CD2E3A"; ctx.fill();
      break;
    case "Francia":
      ctx.fillStyle = "#0055A4"; ctx.fillRect(0,0,53,100);
      ctx.fillStyle = "white"; ctx.fillRect(53,0,53,100);
      ctx.fillStyle = "#EF4135"; ctx.fillRect(106,0,54,100); break;
    case "Líbano":
      ctx.fillStyle = "#ED1C24"; ctx.fillRect(0,0,160,25);
      ctx.fillStyle = "white"; ctx.fillRect(0,25,160,50);
      ctx.fillStyle = "#ED1C24"; ctx.fillRect(0,75,160,25); break;
    case "Barbados":
      ctx.fillStyle = "#00267F"; ctx.fillRect(0,0,53,100);
      ctx.fillStyle = "#FFC726"; ctx.fillRect(53,0,53,100);
      ctx.fillStyle = "#00267F"; ctx.fillRect(106,0,54,100); break;
    case "Eritrea":
      ctx.fillStyle = "#12AD2B"; ctx.fillRect(0,0,160,100);
      ctx.fillStyle = "#D91023";
      ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(160,50); ctx.lineTo(0,100); ctx.closePath(); ctx.fill();
      break;
    case "Chequia":
      ctx.fillStyle = "white"; ctx.fillRect(0,0,160,50);
      ctx.fillStyle = "#D7141A"; ctx.fillRect(0,50,160,50);
      ctx.fillStyle = "#11457E";
      ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(80,50); ctx.lineTo(0,100); ctx.closePath(); ctx.fill();
      break;
    case "Senegal":
      ctx.fillStyle = "#00853F"; ctx.fillRect(0,0,53,100);
      ctx.fillStyle = "#FDEF42"; ctx.fillRect(53,0,53,100);
      ctx.fillStyle = "#E31B23"; ctx.fillRect(106,0,54,100); break;
    case "Seychelles":
      ctx.fillStyle = "#003F87";
      ctx.beginPath(); ctx.moveTo(0,100); ctx.lineTo(0,0); ctx.lineTo(70,100); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#FCD856";
      ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(90,100); ctx.lineTo(0,100); ctx.closePath(); ctx.fill();
      break;
    case "Singapur":
      ctx.fillStyle = "#EF3340"; ctx.fillRect(0,0,160,50);
      ctx.fillStyle = "white"; ctx.fillRect(0,50,160,50); break;
    case "Islandia":
      ctx.fillStyle = "#02529C"; ctx.fillRect(0,0,160,100);
      ctx.fillStyle = "white"; ctx.fillRect(40,0,20,100);
      ctx.fillRect(0,40,160,20);
      ctx.fillStyle = "#DC1E35"; ctx.fillRect(45,0,10,100);
      ctx.fillRect(0,45,160,10); break;
    case "Honduras":
      ctx.fillStyle = "#0073CF"; ctx.fillRect(0,0,160,33);
      ctx.fillStyle = "white"; ctx.fillRect(0,33,160,34);
      ctx.fillStyle = "#0073CF"; ctx.fillRect(0,67,160,33); break;
    case "Tonga":
      ctx.fillStyle = "#C10000"; ctx.fillRect(0,0,160,100);
      ctx.fillStyle = "white"; ctx.fillRect(0,0,70,45);
      ctx.fillStyle = "#C10000"; ctx.fillRect(30,5,10,35); ctx.fillRect(10,20,50,10); break;
    case "Santa Lucía":
      ctx.fillStyle = "#66CCFF"; ctx.fillRect(0,0,160,100);
      ctx.fillStyle = "black";
      ctx.beginPath(); ctx.moveTo(80,10); ctx.lineTo(120,90); ctx.lineTo(40,90); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "yellow";
      ctx.beginPath(); ctx.moveTo(80,15); ctx.lineTo(115,85); ctx.lineTo(45,85); ctx.closePath(); ctx.fill();
      break;
  }
}
