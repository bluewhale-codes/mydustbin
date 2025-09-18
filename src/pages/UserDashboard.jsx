import React, { useState } from "react";

// UserDashboard.jsx
// Single-file React component styled with Tailwind CSS
// Default export a responsive dashboard containing the citizen-facing features

export default function UserDashboard() {
  const [trainingComplete, setTrainingComplete] = useState(45); // percent
  const [greenPoints, setGreenPoints] = useState(320);
  const [reports, setReports] = useState([
    { id: 1, title: "Overflowing public bin", status: "Resolved", date: "2025-09-02" },
    { id: 2, title: "Illegal dumping near park", status: "Pending", date: "2025-09-07" },
  ]);
  const [myBins] = useState({ dry: true, wet: true, hazardous: true });
  const [collectionSchedule] = useState([
    { day: "Mon", type: "Wet", time: "7:00 AM" },
    { day: "Wed", type: "Dry", time: "9:00 AM" },
    { day: "Fri", type: "Hazardous", time: "10:00 AM" },
  ]);
  const [missedPickups, setMissedPickups] = useState([]);

  // mock handlers
  function handleReport(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    setReports((p) => [
      { id: Date.now(), title, status: "Reported", date: new Date().toISOString().slice(0, 10) },
      ...p,
    ]);
    e.target.reset();
  }

  function schedulePickup(type) {
    const request = {
      id: Date.now(),
      type,
      status: "Volunteer Assigned",
      date: new Date().toISOString().slice(0, 10),
    };
    setMissedPickups((p) => [request, ...p]);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">My Waste Dashboard</h1>
            <p className="text-sm text-gray-500">Track segregation, collection, training & rewards</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-gray-500">Green Points</div>
              <div className="font-medium text-lg">{greenPoints}</div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">Redeem</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left column: main widgets */}
        <section className="lg:col-span-3 space-y-6">


             {/* Personal Impact */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold">My Impact</h3>
            <p className="text-sm text-gray-500">See how your household contributes to waste reduction</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ImpactCard title="This Month" value="12 kg recycled" />
              <ImpactCard title="Compost" value="8 kg" />
              <ImpactCard title="CO₂ saved" value="4.2 kg" />
            </div>
          </div>
          {/* Training & Awareness */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Training & Awareness</h2>
                <p className="text-sm text-gray-500">Complete mandatory modules to earn badges and points.</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Progress</div>
                <div className="text-sm font-medium">{trainingComplete}% complete</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <ModuleCard title="Segregation Basics" progress={80} />
              <ModuleCard title="Composting at Home" progress={62} />
              <ModuleCard title="Plastic Reuse" progress={20} />
            </div>
          </div>
          

          {/* Household Waste Management */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Household Waste Management</h3>
            <p className="text-sm text-gray-500">Your issued items and compost activity</p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <BinIcon className="w-10 h-10" />
                <div>
                  <div className="font-medium">3-bin set</div>
                  <div className="text-sm text-gray-500">Dry · Wet · Hazardous</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-500">Compost Kit</div>
                <button className="px-3 py-1 bg-gray-100 rounded text-sm">Log Compost</button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <StatusPill label="Dry Bin" ok={myBins.dry} />
              <StatusPill label="Wet Bin" ok={myBins.wet} />
              <StatusPill label="Hazardous" ok={myBins.hazardous} />
            </div>
          </div>

          {/* Collection Tracking */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Collection Tracking</h3>
                <p className="text-sm text-gray-500">Live schedule & vehicle tracking</p>
              </div>
              <div className="text-sm text-gray-500">Next pickup: Wed — Dry — 9:00 AM</div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {collectionSchedule.map((c) => (
                <div key={c.day} className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">{c.day}</div>
                  <div className="font-medium">{c.type}</div>
                  <div className="text-sm text-gray-500">{c.time}</div>
                  <button
                    onClick={() => schedulePickup(c.type)}
                    className="mt-2 px-2 py-1 bg-blue-600 text-white text-xs rounded"
                  >
                    Reschedule Pickup
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">Map / Vehicle tracker placeholder</div>
            </div>

            {missedPickups.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium">Volunteer Pickup Requests</h4>
                <ul className="mt-2 space-y-2">
                  {missedPickups.map((m) => (
                    <li key={m.id} className="flex items-center justify-between bg-green-50 p-3 rounded">
                      <div>
                        <div className="font-medium">{m.type} Waste</div>
                        <div className="text-xs text-gray-500">Requested on {m.date}</div>
                      </div>
                      <div className="text-xs bg-green-200 px-2 py-1 rounded">{m.status}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Report Waste */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Report Waste</h3>
              <div className="text-sm text-gray-500">Send geo-tagged photos to ULB</div>
            </div>

            <form onSubmit={handleReport} className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input name="title" placeholder="Short description" className="col-span-2 p-2 border rounded" required />
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Report</button>
            </form>

            <div className="mt-4">
              <h4 className="font-medium">Recent reports</h4>
              <ul className="mt-2 space-y-2">
                {reports.map((r) => (
                  <li key={r.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div>
                      <div className="font-medium">{r.title}</div>
                      <div className="text-xs text-gray-500">{r.date}</div>
                    </div>
                    <div className={`text-sm px-2 py-1 rounded-full ${r.status === 'Pending' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                      {r.status}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

         
        </section>

        {/* Right column: quick actions & facilities */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Incentives & Penalties</h4>
            <p className="text-sm text-gray-500">Gain points for compliance. Penalties visible here.</p>

            <div className="mt-3 grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between">
                <div className="text-sm">Last fine</div>
                <div className="text-sm font-medium text-red-600">₹0</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Points this week</div>
                <div className="text-sm font-medium">+20</div>
              </div>
            </div>

            <button className="mt-4 w-full px-3 py-2 bg-green-600 text-white rounded">View Rewards</button>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Facilities Nearby</h4>
            <p className="text-sm text-gray-500">Recycling centres, scrap shops & plants</p>

            <ul className="mt-3 space-y-2">
              <li className="text-sm">Recycling centre — 1.2 km</li>
              <li className="text-sm">Biomethanization plant — 3.6 km</li>
              <li className="text-sm">Scrap shop (online) — Open</li>
            </ul>

            <button className="mt-4 w-full px-3 py-2 bg-gray-100 rounded">Open Map</button>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Area Committee</h4>
            <p className="text-sm text-gray-500">Green Champions — local monitoring & events</p>

            <div className="mt-3 text-sm">
              <div>Next meet: 2025-09-15</div>
              <div className="mt-2"><button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Join</button></div>
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-7xl mx-auto mt-8 text-sm text-gray-500">Powered by SmartWaste • Privacy-friendly</footer>
    </div>
  );
}

// --- Subcomponents (in the same file for convenience) ---
function ModuleCard({ title, progress = 0 }) {
  return (
    <div className="p-3 rounded bg-gray-50">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-2 rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg,#34d399,#10b981)" }} />
        </div>
        <div className="text-xs text-gray-500 mt-2">{progress}% complete</div>
      </div>
    </div>
  );
}

function StatusPill({ label, ok }) {
  return (
    <div className="flex items-center gap-3 p-2 border rounded">
      <div className={`w-3 h-3 rounded-full ${ok ? "bg-green-500" : "bg-red-400"}`} />
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-gray-500">{ok ? "Issued" : "Not issued"}</div>
      </div>
    </div>
  );
}

function ImpactCard({ title, value }) {
  return (
    <div className="p-3 rounded bg-gray-50 text-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 font-medium text-lg">{value}</div>
    </div>
  );
}

function BinIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="14" rx="2" stroke="#4B5563" strokeWidth="1.5" />
      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
