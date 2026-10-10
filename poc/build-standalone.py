"""Bundle the local viewer into one offline HTML file; no build dependencies."""
from pathlib import Path
import base64,json
root=Path(__file__).resolve().parent
html=(root/'index.html').read_text()
assets={p.stem:'data:image/png;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (root/'assets').glob('*.png')}
reference='data:image/jpeg;base64,'+base64.b64encode((root/'assets/reference.jpeg').read_bytes()).decode()
html=html.replace('assets/reference.jpeg',reference).replace("im.src='assets/'+name+'.png'","im.src=ASSETS[name]")
html=html.replace('<script src="page-data.js"></script>','<script>const ASSETS='+json.dumps(assets)+';\n'+(root/'page-data.js').read_text()+'\n</script>')
html=html.replace('<script src="reader.js"></script>','<script>\n'+(root/'reader.js').read_text()+'\n</script>')
(root/'norea-page.html').write_text(html)
print('Built offline norea-page.html')
