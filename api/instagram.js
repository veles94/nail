export default async function handler(req, res) {
  const cloud = 'dkaekr0ou';

  try {
    const r = await fetch(
      `https://res.cloudinary.com/${cloud}/image/list/gallery.json`
    );
    const data = await r.json();

    const items = (data.resources || []).slice(0, 4).map(img => ({
      image: `https://res.cloudinary.com/${cloud}/image/upload/c_fill,w_600,h_600,g_auto/${img.public_id}.jpg`,
      link: 'https://www.instagram.com/nailroom.ottawa/'
    }));

    res.setHeader('Cache-Control', 's-maxage=3600');
    res.status(200).json({ items });
  } catch (e) {
    console.error('Cloudinary error:', e.message);
    res.status(200).json({ items: [] });
  }
}
