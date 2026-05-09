export default async function handler(req, res) {
  const url = 'https://www.instagram.com/nailroom.ottawa/?__a=1&__d=dis';

  try {
    const r = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const j = await r.json();

    const edges =
      j.graphql?.user?.edge_owner_to_timeline_media?.edges || [];

    const items = edges.map(e => ({
      image: e.node.display_url,
      link: 'https://www.instagram.com/p/' + e.node.shortcode + '/'
    })).slice(0, 4);

    res.setHeader('Cache-Control', 's-maxage=3600');
    res.status(200).json({ items });

  } catch {
    res.status(200).json({ items: [] });
  }
}
