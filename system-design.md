# SYSTEM DESIGN
# WEBSITE -
  Read only apllication 
# WEBSITE APPLICATION-
  Read  and write apllication 
# Latency 
  Latency  is network delay + compitutional delay
  Monolithic lat = compitutional delay
  Distributed  lat = compitutional delay + Network  delay
  Reduce latency - using cacheing,CDN, Doing Hardware & server update.
# Throughput 
 Improve - Using Cacheing,CDN,Distributing system,Load balancer, upgrade ur resources.
 # Availability 
 Like for multiple user for sale time ,candidates result time
 Distributed sys availability high compare to Monolithic arc


 # 📘 System Design Guide

This document provides use cases and design outlines for common system design problems for both **fresher** and **experienced** levels. Each design is simplified to convey core concepts and can be expanded with architectural diagrams and tech stacks.

---

## 🧑‍🎓 Fresher Level System Design

### 1. URL Shortening Service

**Use Case:** Users enter long URLs and get a short version (like `bit.ly/abc123`) to share easily.
**Core Components:**

* Input form (frontend)
* Hashing service
* Database for mapping (short URL ↔ long URL)

### 2. Basic Chat Application

**Use Case:** Two users can send/receive messages in real-time.
**Core Components:**

* WebSocket connection
* Message queue
* Database for storing messages

### 3. File Storage System

**Use Case:** Users upload/download files (like Google Drive).
**Core Components:**

* Frontend UI for file uploads
* Backend service
* File storage (e.g., AWS S3 or local file system)

### 4. Social Media Platform (Basic)

**Use Case:** Users can post, like, and comment.
**Core Components:**

* User profile
* Post/feed system
* Relational database

### 5. Search Engine (Simple)

**Use Case:** Search static web content.
**Core Components:**

* Crawler
* Indexer
* Search interface

### 6. E-commerce Website

**Use Case:** Users can browse products, add to cart, and purchase.
**Core Components:**

* Product catalog
* Cart system
* Order & payment module

### 7. Basic Ride-Sharing System

**Use Case:** Users book rides with nearby drivers.
**Core Components:**

* Map API
* Ride-matching engine
* User/driver management

### 8. Video Streaming Service

**Use Case:** Users can play/pause videos.
**Core Components:**

* Video encoder
* Content Delivery Network (CDN)
* Media player frontend

### 9. Recommendation System (Simple)

**Use Case:** Recommend items based on user behavior.
**Core Components:**

* History tracker
* Basic rule-based recommender

### 10. Food Delivery App

**Use Case:** Order food from nearby restaurants.
**Core Components:**

* Restaurant catalog
* Order tracker
* Delivery person tracker

### 11. Parking Lot Management System

**Use Case:** Track car entries/exits and manage spots.
**Core Components:**

* Entry/exit sensor API
* Spot assignment logic

### 12. Music Streaming Service

**Use Case:** Play/pause/search music.
**Core Components:**

* Music catalog
* Streaming API
* Player frontend

### 13. Online Ticket Booking

**Use Case:** Book movie/train tickets.
**Core Components:**

* Schedule management
* Booking engine
* Seat locking logic

### 14. Note-taking App

**Use Case:** Create, update, and delete notes.
**Core Components:**

* Note editor UI
* CRUD APIs
* Cloud/database storage

### 15. Weather Forecasting System

**Use Case:** Show real-time weather.
**Core Components:**

* Third-party API integration
* Caching for repeated queries

### 16. Basic Email Service

**Use Case:** Compose/send/receive emails.
**Core Components:**

* SMTP/IMAP protocols
* Inbox manager
* Email composer

### 17. File Synchronization System

**Use Case:** Sync files across devices.
**Core Components:**

* File watcher
* Delta change engine
* Conflict resolver

### 18. Calendar Application

**Use Case:** Add/view/edit events.
**Core Components:**

* Event scheduler
* Reminder service
* Time zone handling

### 19. Online Quiz Platform

**Use Case:** Users attempt timed quizzes.
**Core Components:**

* Question bank
* Timer service
* Result evaluator

### 20. User Authentication System

**Use Case:** Login/signup/logout with sessions.
**Core Components:**

* JWT/token-based auth
* Session store
* Secure password storage

---

## 👩‍💻 Experienced Level System Design

### 1. URL Shortener (like Bit.ly)

**Additions:**

* Analytics tracking
* Load balancing
* Cache for fast redirection

### 2. Distributed Key-Value Store (like Redis)

**Components:**

* Hashing mechanism
* Sharding and replication
* LRU cache strategy

### 3. Scalable Social Network (like Facebook)

**Components:**

* Feed generation service
* Distributed databases
* Graph DB for connections

### 4. Recommendation System (like Netflix)

**Components:**

* Collaborative filtering
* Real-time data pipeline (Kafka)
* ML model deployment

### 5. Distributed File System (like HDFS)

**Components:**

* NameNode/DataNode architecture
* Replication & fault tolerance
* Block storage

### 6. Real-time Messaging (like WhatsApp)

**Components:**

* Protocols (MQTT/XMPP)
* Message delivery guarantees
* Encryption (end-to-end)

### 7. Web Crawler (like Google)

**Components:**

* URL frontier
* Page fetcher/parser
* Robots.txt respect

### 8. Distributed Cache (like Memcached)

**Components:**

* In-memory store
* Consistent hashing
* TTL (expiry logic)

### 9. CDN (like Cloudflare)

**Components:**

* Edge caching
* Geo-based routing
* Origin pull architecture

### 10. Scalable Search Engine (like Google)

**Components:**

* Inverted index
* Ranking algorithms
* Query optimization

### 11. Ride-sharing System (like Uber)

**Components:**

* Geo-hashing
* ETA & pricing algorithms
* Driver-rider dispatch system

### 12. Video Streaming (like YouTube)

**Components:**

* Video chunking
* Adaptive bitrate streaming
* Global CDN

### 13. Online Food Delivery (like Zomato)

**Components:**

* Real-time delivery tracking
* Rating & review system
* Inventory sync

### 14. Collaborative Document Editing (like Google Docs)

**Components:**

* Operational transformation or CRDT
* Real-time sync with WebSocket
* Conflict resolution engine

### 15. E-commerce Platform (like Amazon)

**Components:**

* Inventory and pricing engine
* Order fulfillment system
* Recommendation & search engine

### 16. Marketplace Recommender

**Components:**

* Multi-factor personalization
* User segmentation
* AB testing framework

### 17. Fault-tolerant DB System

**Components:**

* Consensus algorithms (Raft/Paxos)
* Data replication
* Partition handling

### 18. Event-driven System (like Twitter)

**Components:**

* Kafka/event buses
* Microservices with pub/sub
* Ordering guarantees

### 19. Scalable Photo Sharing (like Instagram)

**Components:**

* Image processing pipeline
* CDN with image resizing
* Feed ranking service

### 20. Distributed Task Scheduler

**Components:**

* Cron replacement with retries
* Task deduplication
* Distributed lock service

---

> This file gives only a high-level overview. For each system, detailed architectural diagrams, APIs, databases, and scaling strategies should be designed based on the scope.
