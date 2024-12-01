export const tabsData = [
  {
    id: "daily",
    label: "Daily",
    content: (
      <div>
        <ul className="flex flex-col gap-3">
          <li>Monitoring through MIS</li>
          <li>Reports</li>
          <li>Performance Trends</li>
          <li>escalations by internal team</li>
          <li>sharing with clients</li>
        </ul>
      </div>
    ),
  },
  {
    id: "weekly",
    label: "Weekly",
    content: (
      <div>
        <ul className="flex flex-col gap-3">
          <li>Informal reviews with process owner and client engagement</li>
        </ul>
      </div>
    ),
  },
  {
    id: "monthly",
    label: "MBR Monthly",
    content: (
      <div>
        <ul className="flex flex-col gap-3">
          <li>Formal review of process owners along with clients</li>
          <li>Root cause fix (RCF) of identified issues and escalations</li>
          <li>Performance-based Employees R&R</li>
        </ul>
      </div>
    ),
  },
];
