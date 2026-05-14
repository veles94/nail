export default async function handler(req, res) {
  const base = 'https://raw.githubusercontent.com/veles94/nail/main/gallery';

  const items = [
    { image: `${base}/1.jpg`, link: 'https://www.instagram.com/nailroom.ottawa/' },
    { image: `${base}/2.jpg`, link: 'https://www.instagram.com/nailroom.ottawa/' },
    { image: `${base}/3.jpg`, link: 'https://www.instagram.com/nailroom.ottawa/' },
    { image: `${base}/4.jpg`, link: 'https://www.instagram.com/nailroom.ottawa/' },
  ];

  res.setHeader('Cache-Control', 's-maxage=3600');
  res.status(200).json({ items });
}
