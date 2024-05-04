import Menu from "@mui/icons-material/Menu";
export default function Hamburger() {
  return (
    <div className="p-3 flex-row bg-slate-100 justify-center h-screen">
      <Menu className="cursor-pointer" />
      <h1>meu1</h1>
      <h2>menu2</h2>
      <h3>menu3</h3>
    </div>
  );
}
