interface RcnResponse {
  id: string;
  edition: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const rcnList: RcnResponse[] = [];

async function fetchRcnList() {
  const response = await fetch("http://localhost:4400/rcn");
  const rcnResponse: RcnResponse = await response.json();

  console.log(rcnResponse);
}

fetchRcnList();
