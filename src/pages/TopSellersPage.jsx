import TopSellers from "../components/TopSellers/TopSellers";

const TopSellersPage = ({ data }) => {
  const { topSellers } = data;

  return (
    <div className="page">
      <div className="pageHead">
        <div className="container">
          <div className="pageTitle">Top Sellers</div>
          <div className="pageSub">Best selling products this week</div>
        </div>
      </div>

      <TopSellers data={topSellers.items} />
    </div>
  );
};

export default TopSellersPage;
