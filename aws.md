# RDS
# read repllica 
  Just for debbuging purpouse , copy of prod DB. 
# database zone goes down (when OS patcing & sercurity Update,network connectivity loss )[Multi-AZ -enable ]
  suppose that one database zone are down how resolve th e problem
  If a database zone goes down in AWS RDS, you can resolve the issue by leveraging Multi-AZ Deployment and Standby Instances.
  we can create a standby intance during the econfiguration  option inside on avilability& durabilty  mutliA-z deploymenr
  If no Multi-AZ or Read Replica is available, restore from the latest RDS snapshots or automated backups.
  Steps:
  Go to AWS RDS Console → Snapshots → Select the latest backup → Restore DB instance.
# Multi-AZ Deployment (Recommended)
If you enabled Multi-AZ during the RDS configuration, AWS automatically creates a standby replica in a different Availability Zone (AZ).
In case of a zone failure, AWS automatically fails over to the standby instance, minimizing downtime.
# Read Replicas (Manual Failover)
If Multi-AZ is not enabled, but you have Read Replicas in another AZ or region, you can promote a Read Replica to a standalone database.
# Restore from Automated Backups or Snapshots
If no Multi-AZ or Read Replica is available, restore from the latest RDS snapshots or automated backups.
Steps:
Go to AWS RDS Console → Snapshots → Select the latest backup → Restore DB instance.
# Manually Redirect Application Traffic
If failover is not automatic, update your database connection string to point to the new instance.
Use Route 53 for automatic failover by setting up health checks and DNS failover.
# Preventative Measures
Always enable Multi-AZ Deployment for production databases.
Use Read Replicas for performance and disaster recovery.
Set up CloudWatch alarms to monitor database health.
# How to down database 
  Select database and go to action button then select reboot option then  reboot after 1 min (app) start down you DB. 

# What is Proxy in RDS 
 like middleware of Database and OS when heat multilple network & scocket then automatic craete space .
 we can use for limited database like MariaDB & MySQl,PostgreSQL and SQLserver