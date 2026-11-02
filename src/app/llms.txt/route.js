const body = `# Regency at Summerlin | Dr. Jan Duffy

> Resale homes in Regency at Summerlin, Summerlin, Las Vegas, by Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties.

## Pages
- [Home](https://www.regencyvegas.com/)
- [Homes for sale](https://www.regencyvegas.com/homes-for-sale)
- [Floor plans](https://www.regencyvegas.com/floor-plans)
- [Buying guide](https://www.regencyvegas.com/buying-guide)
- [Selling](https://www.regencyvegas.com/selling)
- [FAQ](https://www.regencyvegas.com/faq)
- [Contact](https://www.regencyvegas.com/contact)
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
