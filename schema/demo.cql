/*
Script generated by Aqua Data Studio 14.0.18 on Jul-31-2014 02:48:28 PM
Keyspace: demo
Schema: <DEFAULT>
Objects: TABLE, INDEX
*/
DROP INDEX idx_userName_emails;
GO

DROP TABLE "demo"."user"
GO

DROP TABLE "demo"."emails"
GO


CREATE TABLE "demo"."emails"  ( 
	"id"      	uuid,
	"emails"  	set<text>,
	"username"	text,
	PRIMARY KEY("id")
) WITH
	"bloom_filter_fp_chance"='0.01' AND "caching"='KEYS_ONLY' AND "dclocal_read_repair_chance"='0.1' AND "gc_grace_seconds"='864000' AND "read_repair_chance"='0.0' AND "replicate_on_write"='true'
	AND compaction = {'class':'SizeTieredCompactionStrategy'}
	AND compression = {'sstable_compression':'org.apache.cassandra.io.compress.LZ4Compressor'}
GO

CREATE TABLE "demo"."user"  ( 
	"id"  	uuid,
	"name"	text,
	PRIMARY KEY("id")
) WITH
	"bloom_filter_fp_chance"='0.01' AND "caching"='KEYS_ONLY' AND "dclocal_read_repair_chance"='0.1' AND "gc_grace_seconds"='864000' AND "read_repair_chance"='0.0' AND "replicate_on_write"='true'
	AND compaction = {'class':'SizeTieredCompactionStrategy'}
	AND compression = {'sstable_compression':'org.apache.cassandra.io.compress.LZ4Compressor'}
GO

CREATE INDEX idx_userName_emails
	ON "demo"."emails"("username");
GO


INSERT INTO "demo"."user"("id", "name")
  VALUES(0c788660-17f1-11e4-9271-7987f73a0892, 'Aditya')
GO
INSERT INTO "demo"."user"("id", "name")
  VALUES(4c185de0-17f1-11e4-8182-d5cb6b990fb8, 'Aditya')
GO
INSERT INTO "demo"."user"("id", "name")
  VALUES(954a61e0-17ef-11e4-9398-09a6268e49f2, 'Aditya')
GO
INSERT INTO "demo"."user"("id", "name")
  VALUES(d6522dd0-17ef-11e4-a5a3-6155019cae68, 'Aditya')
GO
