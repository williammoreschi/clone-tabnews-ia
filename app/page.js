import Confetti from "./confetti";

export const dynamic = "force-dynamic";

async function getTotalPublishedContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { cache: "no-store" },
    );

    const totalRows = response.headers.get("x-pagination-total-rows");
    if (!totalRows) return null;

    return Number(totalRows).toLocaleString("pt-BR");
  } catch {
    return null;
  }
}

export default async function Page() {
  const totalContents = await getTotalPublishedContents();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <Confetti />

      <div style={{ maxWidth: "680px" }}>
        <span
          style={{
            display: "inline-block",
            padding: "0.35rem 0.85rem",
            borderRadius: "999px",
            backgroundColor: "#1f2937",
            border: "1px solid #30363d",
            color: "#58a6ff",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "1.25rem",
          }}
        >
          🚧 Em Construção
        </span>

        <h1
          style={{
            fontSize: "2rem",
            lineHeight: 1.4,
            fontWeight: 700,
            margin: "0 0 2rem 0",
            color: "#f0f6fc",
          }}
        >
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto
        </h1>

        <div
          style={{
            padding: "1.5rem",
            borderRadius: "12px",
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              margin: "0 0 0.5rem 0",
              fontSize: "0.95rem",
              color: "#8b949e",
            }}
          >
            Total de conteúdos publicados no TabNews agora:
          </p>
          <strong
            style={{
              fontSize: "2.25rem",
              color: "#3fb950",
              fontWeight: 800,
            }}
          >
            {totalContents ?? "Indisponível no momento"}
          </strong>
        </div>

        <a
          href="https://www.tabnews.com.br"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            backgroundColor: "#238636",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Acessar o TabNews oficial →
        </a>
      </div>
    </main>
  );
}
