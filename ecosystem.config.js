module.exports = {
  apps: [
    {
      name: 'main',
      script: './main.py',
      exec_mode: 'fork',
      interpreter: 'python3',
      cron_restart: "*/1 * * * *", // Restart setiap 15 menit
    },
  ],
};
